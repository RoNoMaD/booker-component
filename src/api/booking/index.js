// @flow
const accessToken = 'b233fb24-85a0-487a-bbe2-92a3dbff03bf';

function convertDate(date) {
  let yyyy = date.getFullYear().toString();
  let mm = (date.getMonth() + 1).toString();
  let dd = date.getDate().toString();

  let mmChars = mm.split('');
  let ddChars = dd.split('');

  return (
    yyyy +
    '-' +
    (mmChars[1] ? mm : '0' + mmChars[0]) +
    '-' +
    (ddChars[1] ? dd : '0' + ddChars[0])
  );
}

function handleErrors(response) {
  if (response.ok) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    response.json().then(body => console.log(body));
    return Promise.reject(error);
  }
}

/**
 * Get product availabilities for a given product id and month
 * @param {number} productId - the product ID
 * @param {Date} month - the start date to look availabilities from
 * @return {Promise} the promise of month availabilities
 */
export function getProductMonthAvailabilities(
  productId: number = 4581,
  fromDate: string = '2017-08-02T00:00:00',
  unitQuantities: Map
  // fromDate = new Date().toISOString()
): Promise<any> {
  let url = `${API_ENDPOINT}/products/${productId}/product_day_availabilities?access_token=${accessToken}&from_date=${fromDate}`;
  // set unit quantities as query parameters
  if (unitQuantities && unitQuantities.size > 0) {
    let i = 0;
    url += '&unit_quantities=';
    unitQuantities.forEach((value, key, quantities) => {
      i++;
      url += key + ':' + value;
      if (quantities.size > i) {
        url += ';';
      }
    });
  }
  return fetch(url)
    .then(handleErrors)
    .then(response => {
      return response.json();
    })
    .then(response => response._embedded.productDayAvailabilities)
    .then(availabilities =>
      // filter bookable and future availabilities
      availabilities.filter(
        availability =>
          convertDate(new Date(availability.date)) >= convertDate(new Date()) &&
          availability.bookable
      )
    )
    .catch(error => {
      console.error(error);
    });
}

export function getProductTimeSlotAvailabilities(
  productId = 4581,
  onDate = '2017-08-20T00:00:00'
) {
  return fetch(
    `${API_ENDPOINT}/products/${productId}/product_time_slot_availabilities?access_token=${accessToken}&on_date=${onDate}`
  )
    .then(handleErrors)
    .then(response => {
      return response.json();
    })
    .then(response => {
      return response._embedded.productTimeSlotAvailabilities;
    });
}

function createOrder(
  companyId: number = 271,
  companyType: string = 'RESELLER'
): Promise<any> {
  return fetch(`${API_ENDPOINT}/orders?access_token=${accessToken}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      company: {
        id: companyId,
        type: companyType
      }
    })
  })
    .then(handleErrors)
    .then(response => {
      return response.json();
    })
    .then(order => {
      console.log(order);
      return order;
    })
    .catch(error => {
      console.error(error);
    });
}

export function createBooking(
  product,
  quantities,
  day,
  slot,
  extras,
  order,
  company
): Promise<any> {
  // create booking from product, quantities, day and slot
  let booking = {
    product: {
      id: product.id,
      type: product.type
    },
    startTime: slot.startDateTime,
    unitQuantityDeclarations: Array.from(
      quantities.quantities
    ).map(([key, value]) => ({
      unit: { id: key, type: 'TARGET' },
      quantity: value
    }))
  };
  if (quantities.isPrivatized) {
    booking.privatized = quantities.isPrivatized;
  }
  if (extras) {
    extras = Array.from(extras.quantities).map(([key, value]) => ({
      product: {
        id: key,
        type: 'EXTRA'
      },
      startTime: slot.startDateTime,
      quantity: value
    }));
  }
  // if (!orderId && companyId && companyType) {
  if (!order && company) {
    return createOrder(company.id, company.type).then(order =>
      postBooking(order.id, booking, extras).then(bookings => {
        order.bookings = bookings;
        return order;
      })
    );
  } else if (order) {
    return postBooking(order.id, booking, extras).then(bookings => {
      order.bookings = order.bookings.concat(bookings);
      return order;
    });
  } else {
    throw new Error('Provide a company (id and type) or an order (id).');
  }
}

type Booking = {
  order: ?{
    id: ?number
  },
  product: {
    id: number,
    type: string
  },
  startTime: string,
  unitQuantityDeclarations: Array<{
    unit: {
      id: number,
      type: string
    },
    quantity: number,
    session_quantity: ?number
  }>,
  privatized: ?boolean
};

type Extras = ?Array<{
  order: ?{
    id: ?number
  },
  product: {
    id: number,
    type: string
  },
  startTime: string,
  quantity: number
}>;

export function postBooking(
  orderId: number,
  booking: Booking,
  extras: Extras
): Promise<any> {
  booking.order = {
    id: orderId
  };
  // booking = {
  //   order: {
  //     id: orderId
  //   },
  //   product: {
  //     id: 3334,
  //     type: 'CLASSIC'
  //   },
  //   startTime: '2017-08-30T11:00:00+02:00',
  //   unitQuantityDeclarations: [
  //     { unit: { id: 2084, type: 'MAIN' }, quantity: 1, session_quantity: 1 }
  //   ]
  // };
  // extras = [
  //   {
  //     order: { id: 7253 },
  //     product: { id: 4703, type: 'EXTRA' },
  //     quantity: 1,
  //     startTime: '2017-08-31T11:00:00+02:00'
  //   }
  // ];
  if (!extras) {
    return createSimpleBooking(booking).then(booking => [booking]);
  } else {
    extras = extras.map(extra => {
      extra.order = {
        id: orderId
      };
      return extra;
    });
    let bookings = [];
    return createSimpleBooking(booking)
      .then(booking => {
        bookings.push(booking);
        return Promise.all(
          extras.map(extra => {
            extra.bookingLinked = {
              id: booking.id
            };
            return createSimpleBooking(extra);
          })
        );
      })
      .then(extrasBookings => {
        console.log('extra bookings', extrasBookings);
        bookings = bookings.concat(extrasBookings);
        return bookings;
      });
  }
}

function createSimpleBooking(booking) {
  return fetch(`${API_ENDPOINT}/bookings?access_token=${accessToken}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(booking)
  })
    .then(handleErrors)
    .then(response => {
      return response.json();
    })
    .then(booking => {
      console.log(booking);
      return booking;
    })
    .catch(error => {
      console.error(error);
    });
}
