// @flow
import { h } from 'preact';
import Quantity from '../../quantity';

export default function Extra({
  extra,
  quantities,
  handleAddUnit,
  handleSubUnit
}) {
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
        handleSubUnit={handleSubUnit}
      />
    </div>
  );
}
