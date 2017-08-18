// @flow
import { h } from 'preact';
import style from './style.scss';

import MainHeader from './mainheader';
import SessionHeader from './sessionheader';
import GiftHeader from './giftheader';

const Header = ({
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
        currentProduct={currentProduct}
        currentQuantities={currentQuantities}
        currentExtrasQuantities={currentExtrasQuantities}
        currentDay={currentDay}
        currentSlot={currentSlot}
      />}
    {currentProduct &&
      currentProduct.type === 'CLASSIC' &&
      currentProduct._embedded.unit.type === 'SESSION' &&
      <SessionHeader currentProduct={currentProduct} />}
    {currentProduct &&
      currentProduct.type === 'GIFT' &&
      <GiftHeader currentProduct={currentProduct} />}
  </header>;

export default Header;
