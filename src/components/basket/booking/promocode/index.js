import { h, Component } from 'preact';
import roundTo from 'round-to';

export default class PromoCode extends Component {
  render({ promoCode }) {
    return (
      <div>
        <div>
          {promoCode.name}
        </div>
        <div>
          {promoCode.quantity}
        </div>
        <div>
          {roundTo(promoCode.computedReduction, 2)}
        </div>
      </div>
    );
  }
}
