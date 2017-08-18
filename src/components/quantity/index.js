// @flow
import { h } from 'preact';

export default function Quantity({
  unit,
  quantity,
  maxReached,
  handleAddUnit,
  handleSubUnit
}) {
  const addUnit = () => {
    handleAddUnit(unit);
  };

  const subUnit = () => {
    handleSubUnit(unit);
  };

  return (
    <div>
      {unit.numberOfSessions &&
        <div>
          {unit.numberOfSessions}
        </div>}
      {!unit.numberOfSessions
        ? <div>
            {unit.name}
          </div>
        : unit.numberOfSessions > 1
          ? <div>
              {unit.plural}
            </div>
          : <div>
              {unit.name}
            </div>}
      <div>
        <button disabled={quantity === 0} onClick={subUnit}>
          -
        </button>
        <div>
          {quantity}
        </div>
        <button disabled={maxReached} onClick={addUnit}>
          +
        </button>
      </div>
    </div>
  );
}
