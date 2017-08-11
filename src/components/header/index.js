import { h, Component } from 'preact';
// import { Link } from 'preact-router/match';
// import { Text } from 'preact-i18n';
import style from './style.scss';

// import UserIcon from '../icons/user';
// import QuantitiesIcon from '../icons/quantities';
// import CalendarIcon from '../icons/calendar';
// import SlotIcon from '../icons/slot';
// import ExtrasIcon from '../icons/extras';
// import BasketIcon from '../icons/basket';

import MainHeader from './mainheader';

export default class Header extends Component {
  render({ currentProduct }) {
    return (
      <header class={style.header}>
        <h1>ACTIVTY Widget</h1>
        {/*<Link activeClassName={style.active} href="/products/3334/booker/">
            <Text id="header.booker">Booker</Text>
          </Link>*/}
        {currentProduct &&
          currentProduct.pricingType === 0 &&
          <MainHeader currentProduct={currentProduct} />}
      </header>
    );
  }
}
