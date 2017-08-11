// @flow
import { h } from 'preact';
import { Link } from 'preact-router/match';
import { Text } from 'preact-i18n';
import style from './style.scss';

import UserIcon from '../../icons/user';
import QuantitiesIcon from '../../icons/quantities';
import CalendarIcon from '../../icons/calendar';
import SlotIcon from '../../icons/slot';
import ExtrasIcon from '../../icons/extras';
import BasketIcon from '../../icons/basket';

const MainHeader = ({ currentProduct }) =>
  <nav>
    <Link
      activeClassName={style.active}
      href={`/products/${currentProduct.id}/booker/quantities/`}
    >
      <QuantitiesIcon />
      <Text id="header.quantities">Quantities</Text>
    </Link>
    <Link
      activeClassName={style.active}
      href={`/products/${currentProduct.id}/booker/day/`}
    >
      <CalendarIcon />
      <Text id="header.day">Day</Text>
    </Link>
    <Link
      activeClassName={style.active}
      href={`/products/${currentProduct.id}/booker/slot/`}
    >
      <SlotIcon />
      <Text id="header.slot">Slot</Text>
    </Link>
    {currentProduct &&
      currentProduct._embedded.extraProducts &&
      currentProduct._embedded.extraProducts.length > 0 &&
      <Link
        activeClassName={style.active}
        href={`/products/${currentProduct.id}/booker/extras/`}
      >
        <ExtrasIcon />
        <Text id="header.extras">Extras</Text>
      </Link>}
    <Link activeClassName={style.active} href="/products/basket/">
      <BasketIcon />
      <Text id="header.basket">Basket</Text>
    </Link>
  </nav>;
export default MainHeader;
