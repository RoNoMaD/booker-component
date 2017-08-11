import { h, Component } from 'preact';
import TimeRange from './timerange';
import PromoCode from './promocode';
import AddPromoCode from './addpromocode';

export default class Booking extends Component {
  render({ booking }) {
    return (
      <div>
        <div>
          {booking._embedded.product.name}
        </div>
        {!booking._embedded.timeRanges &&
          <div>
            {booking.quantity}
          </div>}
        <div>
          {booking.totalTax}
        </div>
        {booking._embedded.timeRanges &&
          booking._embedded.timeRanges.map(timeRange =>
            <TimeRange key={timeRange.id} timeRange={timeRange} />
          )}
        {booking.promoCodes &&
          booking.promoCodes.map(promoCode =>
            <PromoCode key={promoCode.id} promoCode={promoCode} />
          )}
        <AddPromoCode />
        <div />
      </div>
    );
  }
}
