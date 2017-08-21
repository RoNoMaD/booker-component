// @flow
import { h } from 'preact';
import style from './style.scss';

import MainHeader from './mainheader';
import SessionHeader from './sessionheader';
import GiftHeader from './giftheader';

const Header = ({
  route,
  currentProduct,
  currentQuantities,
  currentDay,
  currentSlot,
  currentExtrasQuantities
}) =>
  <header class={style.header}>
    {currentProduct &&
      currentProduct.type === 'CLASSIC' &&
      (currentProduct._embedded.unit.type === 'MAIN' ||
        currentProduct._embedded.unit.type === 'FORFAIT') &&
      <MainHeader
        route={route}
        currentProduct={currentProduct}
        currentQuantities={currentQuantities}
        currentExtrasQuantities={currentExtrasQuantities}
        currentDay={currentDay}
        currentSlot={currentSlot}
      />}
    {currentProduct &&
      currentProduct.type === 'CLASSIC' &&
      currentProduct._embedded.unit.type === 'SESSION' &&
      <SessionHeader route={route} currentProduct={currentProduct} />}
    {currentProduct &&
      currentProduct.type === 'GIFT' &&
      <GiftHeader route={route} currentProduct={currentProduct} />}
  </header>;

export default Header;
