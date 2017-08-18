// @flow
import { h } from 'preact';

export default function DegressivePrices({ prices }) {
  const getDegressivePrices = prices => {
    return prices.filter(price => price.type === 'DEGRESSIVE');
  };

  return (
    <div>
      {getDegressivePrices(prices) &&
        getDegressivePrices(prices).map(price =>
          <div key={price.id}>
            Degressive price of {price.value} from {price.minTargetUnitQuantity}{' '}
            to {price.maxTargetUnitQuantity} {price._embedded.targetUnit.name}
          </div>
        )}
    </div>
  );
}
