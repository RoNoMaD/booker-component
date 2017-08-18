// @flow
import { h } from 'preact';
import { Text } from 'preact-i18n';
import './style.scss';

import QuantitiesIcon from '../../icons/quantities';
import CalendarIcon from '../../icons/calendar';
import SlotIcon from '../../icons/slot';
import ExtrasIcon from '../../icons/extras';

const MainHeader = ({
  currentProduct,
  currentQuantities,
  currentDay,
  currentSlot,
  currentExtrasQuantities
}) =>
  <nav>
    <div>
      <QuantitiesIcon />
      <Text id="header.quantities">Quantities</Text>
      {currentQuantities &&
        <div>
          {currentQuantities.total}
        </div>}
    </div>
    <div>
      <CalendarIcon />
      <Text id="header.day">Day</Text>
      {currentDay &&
        <div>
          {currentDay.toISOString()}
        </div>}
    </div>
    <div>
      <SlotIcon />
      <Text id="header.slot">Slot</Text>
    </div>
    {currentProduct &&
      currentProduct._embedded.extraProducts &&
      currentProduct._embedded.extraProducts.length > 0 &&
      <div>
        <ExtrasIcon />
        <Text id="header.extras">Extras</Text>
      </div>}
  </nav>;
export default MainHeader;
