// @flow
import { h } from 'preact';
// Tell Babel to transform JSX into preact.h() calls:
/** @jsx h */
import style from './style.scss';

import QuantitiesIcon from '../../icons/quantities';
import CalendarIcon from '../../icons/calendar';
import SlotIcon from '../../icons/slot';
import ExtrasIcon from '../../icons/extras';

const MainHeader = ({
  route,
  currentProduct,
  currentQuantities,
  currentDay,
  currentSlot,
  currentExtrasQuantities
}) =>
  <nav>
    <button class={style.tab}>
      <QuantitiesIcon
        color={`${route === 'quantities'
          ? style.activeColor
          : style.inactiveColor}`}
      />
      {currentQuantities &&
        <div class={`${route === 'quantities' ? style['label-active'] : ''}`}>
          {currentQuantities.total}
        </div>}
    </button>
    <button class={style.tab}>
      <CalendarIcon
        color={`${route === 'day' ? style.activeColor : style.inactiveColor}`}
      />
      {currentDay &&
        <div class={`${route === 'day' ? style['label-active'] : ''}`}>
          {`${currentDay
            .getDate()
            .toString()
            .padStart(2, '0')}/${currentDay
            .getMonth()
            .toString()
            .padStart(2, '0')}`}
        </div>}
    </button>
    <button class={style.tab}>
      <SlotIcon
        color={`${route === 'slot' ? style.activeColor : style.inactiveColor}`}
      />
      {currentSlot &&
        <div class={`${route === 'slot' ? style['label-active'] : ''}`}>
          {`${new Date(currentSlot.startDateTime)
            .getHours()
            .toString()
            .padStart(2, '0')}h${new Date(currentSlot.startDateTime)
            .getMinutes()
            .toString()
            .padStart(2, '0')}`}
        </div>}
    </button>
    {currentProduct &&
      currentProduct._embedded.extraProducts &&
      currentProduct._embedded.extraProducts.length > 0 &&
      <button class={style.tab}>
        <ExtrasIcon
          color={`${route === 'slot'
            ? style.activeColor
            : style.inactiveColor}`}
        />
      </button>}
  </nav>;
export default MainHeader;
