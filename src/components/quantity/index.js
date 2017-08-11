// @flow
import { h } from 'preact';

export default function UnitQuantities({
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

  const getMinPrice = prices => {
    return prices
      .filter(price => price.type !== 'DEGRESSIVE')
      .map(price => price.value)
      .reduce((prev, curr) => {
        return curr < prev ? curr : prev;
      });
  };

  const getMaxPrice = prices => {
    return prices
      .filter(price => price.type !== 'DEGRESSIVE')
      .map(price => price.value)
      .reduce((prev, curr) => {
        return curr > prev ? curr : prev;
      });
  };

  const getDegressivePrices = prices => {
    return prices.filter(price => price.type === 'DEGRESSIVE');
  };

  const getPrices = prices => {
    return prices.filter(price => price.type !== 'DEGRESSIVE');
  };

  console.log();

  return (
    <div>
      <div>
        {unit.name}
      </div>
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
        {unit.prices &&
          getPrices(unit.prices) &&
          getPrices(unit.prices).length > 1 &&
          <div>
            Price from {getMinPrice(unit.prices)} to {getMaxPrice(unit.prices)}
          </div>}
        {unit.prices &&
          getPrices(unit.prices) &&
          getPrices(unit.prices).length === 1 &&
          <div>
            Price {unit.prices[0].value}
          </div>}
        {unit.prices &&
          getDegressivePrices(unit.prices).map(price =>
            <div key={price.id}>
              Degressive price of {price.value} from{' '}
              {price.minTargetUnitQuantity} to {price.maxTargetUnitQuantity}{' '}
              {price._embedded.targetUnit.name}
            </div>
          )}
      </div>
    </div>
  );
}
