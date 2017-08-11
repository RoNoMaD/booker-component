import { h, Component } from 'preact';
import Quantity from '../../quantity';

export default class Extra extends Component {
  render({ extra, quantities, handleAddUnit, handleSubUnit }) {
    return (
      <div>
        {extra.primaryImage && <img src={extra.primaryImage.url} />}
        <div>
          {extra.name}
        </div>
        <div>
          {extra.description}
        </div>
        <Quantity
          unit={extra}
          quantity={quantities.get(extra.id) || 0}
          handleAddUnit={handleAddUnit}
          handleSubUnit={handleAddUnit}
        />
      </div>
    );
  }
}
