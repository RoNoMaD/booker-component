// @flow
import { h } from 'preact';
import { Text } from 'preact-i18n';

export default function PriceRange({ prices }) {
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

  const getPrices = prices => {
    return prices.filter(price => price.type !== 'DEGRESSIVE');
  };

  return (
    <div>
      {getPrices(prices) &&
        getPrices(prices).length > 1 &&
        <Text
          id="quantities.priceFromTo"
          fields={{
            minPrice: getMinPrice(prices),
            maxPrice: getMaxPrice(prices)
          }}
        >
          Price from {getMinPrice(prices)} to {getMaxPrice(prices)}
        </Text>}
      {getPrices(prices) &&
        getPrices(prices).length === 1 &&
        <Text id="quantities.price" fields={{ price: prices[0].value }}>
          Price {prices[0].value}
        </Text>}
    </div>
  );
}
