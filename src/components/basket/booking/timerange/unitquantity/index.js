import { h, Component } from 'preact';
import roundTo from 'round-to';

export default class UnitQuantity extends Component {
  render({ unitQuantity }) {
    return (
      <div>
        <div>
          {unitQuantity.quantity}
        </div>
        <div>
          {unitQuantity._embedded.unitSaved.name}
        </div>
        <div>
          {roundTo(unitQuantity.priceHt * (1 + unitQuantity.tax / 100), 2)}
        </div>
        <div>
          {roundTo(unitQuantity.totalTaxExcluded + unitQuantity.taxAmount, 2)}
        </div>
      </div>
    );
  }
}
