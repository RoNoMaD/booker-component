// @flow
import { h, Component } from 'preact';
import Booking from './booking';

export default class Basket extends Component {
  render({ order }) {
    return (
      <div>
        {!order
          ? <div>Your basket is empty.</div>
          : order &&
            <div>
              {order.bookings &&
                order.bookings.map(booking =>
                  <Booking key={booking.id} booking={booking} />
                )}
              <div>
                Total: {order.totalPrice}
              </div>
            </div>}
      </div>
    );
  }
}
