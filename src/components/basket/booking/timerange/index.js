import { h, Component } from 'preact';
import UnitQuantity from './unitquantity';

export default class TimeRange extends Component {
  render({ timeRange }) {
    return (
      <div>
        <div>
          {timeRange.startTime.toLocaleString()}
        </div>
        {timeRange._embedded.unitQuantities.map((unitQuantity, index) =>
          <UnitQuantity key={index} unitQuantity={unitQuantity} />
        )}
      </div>
    );
  }
}
