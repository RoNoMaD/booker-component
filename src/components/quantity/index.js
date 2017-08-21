// @flow
import { h } from 'preact';
import style from './style.scss';

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
      <div class={style.quantities}>
        <button
          disabled={quantity === 0}
          onClick={subUnit}
          class={style['quantity-button'] + ' ' + style.minus}
        >
          -
        </button>
        <div class={style.quantity}>
          {quantity}
        </div>
        <button
          disabled={maxReached}
          onClick={addUnit}
          class={style['quantity-button'] + ' ' + style.plus}
        >
          +
        </button>
      </div>
    </div>
  );
}
