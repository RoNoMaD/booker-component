// @flow
// import axios from 'axios';
// const API_ENDPOINT = 'http://localhost:8888/v1';
// const API_ENDPOINT = 'https://staging-open-api.myeasyloisirs.com/v1';
// const accessToken = 'b233fb24-85a0-487a-bbe2-92a3dbff03bf';
const accessToken = 'b233fb24-85a0-487a-bbe2-92a3dbff03bf';

const headerToken =
  'token eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXUyJ9.eyJleHAiOjE1MDIyODM2MjYsInVzZXJuYW1lIjoicm9tYWluQGVhc3lsb2lzaXJzLmNvbSIsImlhdCI6IjE1MDIxOTcyMjYifQ.H093VhT3wPRPrw_R5WuLHb24dtvuUinqcOScL6vdrIZuKknj3R8BYNg_jo3L0Zfze20Fp2OTK2CT3Da3B-cYl8GgTilsCYqhz2uLyQzhbwvEyQe9lXIr30IVNFTKyLQZnuAU1FcmnsGjMFursIPvU8gJKjZcy3cpz0eKq57fVifOTiB2crMTiaisrR0rwYyilJc7rQcco6paFArvLmTv8RPN2GWUMiMXkPcoSZ7TYxgBUFlhJEJKzsOKYQOb_9Gq-H8PayTXJ83OlcSOP7exfJHMdZisNTl--olCDUdMEF6lBs-0v5LUO1UqlozWU2YoXv1zdFnSdkOcV7rz8DhNq9N9r5KOvUKSFQ_Spz0S02YosVvGHcs8oAwg3yqw0W7z_TcHFLRt5HvFtoErLPy0EvdNZTLsQezwF12JQY_rHxNys39mIFNAi0t9OLjv1YVN5E6ak0nj1O9XBltsQfKsJXo6aEhGpjlPoJDCRtubyJSUWLQcgq6spJh5MuWkOSfCs4HKVeMveVOMm1QPYxgc0UC102klXyxujNBGilFb1_54O_JuVSO8LFJSKbVlSOgZAK5eGJATxW4JhGiQgpcUY_6-10U_1f0CIIKvJR0OnWFL2RB92_p1Z0_A4s1gd6vbvam7lCSJkgXYBU1VkKAFWj0_QuR1RDm9pmpTfKF7AkQ';

// axios.defaults.headers.common['Authorization'] = headerToken;
/**
 * Generic function that throw an error if the API endpoint return an error
 * otherwise send back the API response
 * @param {Response} the API fetch Response object
 * @return the response if it's valid
 * @throws {Error} an error containing the response status returned by the API
 */
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

export function getProductsByCompanyId(companyId: number = 647) {
  return fetch(
    `${API_ENDPOINT}/companies/${companyId}/products?access_token=${accessToken}&page=1&page_size=64&status=PUBLISHED&embed=prices`
  )
    .then(handleErrors)
    .then(response => {
      return response.json();
    })
    .then(response => {
      return response;
    });
}

export function getProductById(productId = 3093) {
  // return axios
  //   .get(
  //     `${API_ENDPOINT}/products/${productId}?access_token=${accessToken}&embed=prices,tax,unit,extra_products`
  //   )
  //   .then(function(response) {
  //     console.log(response);
  //     return response;
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });
  return fetch(
    `${API_ENDPOINT}/products/${productId}?access_token=${accessToken}&embed=prices,tax,unit,extra_products`
  )
    .then(handleErrors)
    .then(response => {
      return response.json();
    })
    .then(product => setProductUnits(product));
}

/**
 *
 */
function setProductUnits(product) {
  if (product.type === 'CLASSIC') {
    if (
      product._embedded.unit.type === 'MAIN' ||
      product._embedded.unit.type === 'FORFAIT'
    ) {
      // get main/forfait unit selling
      product._embedded.unit.prices = product._embedded.prices.filter(
        price => price.type === 'SELLING'
      );
      // get degressive prices for main unit
      product._embedded.unit.prices = product._embedded.unit.prices.concat(
        product._embedded.prices.filter(
          price =>
            price.type === 'DEGRESSIVE' &&
            price._embedded.targetUnit.id === product._embedded.unit.id
        )
      );
      product.units = [product._embedded.unit];
    }
    if (product._embedded.unit.type === 'MAIN') {
      // get all the specific prices
      let specificPrices = product._embedded.prices.filter(
        price => price.type === 'SPECIFIC'
      );
      // get all the target units
      let targetUnits = specificPrices
        .filter(
          (price, index, prices) =>
            prices
              .map(price => price._embedded.targetUnit.id)
              .indexOf(price._embedded.targetUnit.id) === index
        )
        .map(price => price._embedded.targetUnit);
      // get all the target units specific prices
      targetUnits = targetUnits.map(targetUnit => {
        targetUnit.prices = specificPrices.filter(
          price => price._embedded.targetUnit.id === targetUnit.id
        );
        return targetUnit;
      });
      // get all the target units degressive prices
      targetUnits = targetUnits.map(targetUnit => {
        targetUnit.prices = targetUnit.prices.concat(
          product._embedded.prices.filter(
            price =>
              price.type === 'DEGRESSIVE' &&
              price._embedded.targetUnit.id === targetUnit.id
          )
        );
        return targetUnit;
      });
      product.units = product.units.concat(targetUnits);
    } else if (product._embedded.unit.type === 'SESSION') {
      // TODO fix that shit
      // get session unit selling prices with differents number of sessions
      product.unitQuantities = product._embedded.prices
        .filter(price => price.type === 'SELLING')
        .map(price => ({
          unit: product._embedded.unit,
          price
        }))
        .sort(
          (uq1, uq2) => uq1.price.numberOfSessions - uq2.price.numberOfSessions
        );
    }
  } else if (product.type === 'EXTRA') {
    product.units = [{ price: product._embedded.prices[0] }];
  }

  // if (product._embedded.unit.type === 'MAIN') {
  //   let units = [product._embedded.unit];
  //   // get all the specific units
  //   product.units = units.concat(
  //     product._embedded.prices
  //       .filter(price => price.type === 'SPECIFIC')
  //       .map(price => price._embedded.targetUnit)
  //   );
  // } else if (product._embedded.unit.type === 'SESSION') {
  //   // get every unique number of sessions for session unit
  //   product.unit = product._embedded.unit;
  //   product.unit.sessionQuantities = [].concat(
  //     product._embedded.prices
  //       .filter(price => price.type === 'SELLING')
  //       .map(price => price.numberOfSessions)
  //       .filter(
  //         (numberOfSessions, index, sessionQuantities) =>
  //           sessionQuantities.indexOf(numberOfSessions) === index
  //       )
  //       .sort((p1, p2) => p1.numberOfSessions - p2.numberOfSessions)
  //   );
  // }
  return product;
}

export function filterProductUnitQuantitiesBySeason(
  unitQuantities,
  seasonId: number
) {
  return unitQuantities.filter(
    unitQuantity => unitQuantity.price._embedded.season.id === seasonId
  );
}
