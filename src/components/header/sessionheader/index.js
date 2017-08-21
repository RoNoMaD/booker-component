// @flow
import { h } from 'preact';
import { Text } from 'preact-i18n';
import style from './style.scss';

import QuantitiesIcon from '../../icons/quantities';
import CalendarIcon from '../../icons/calendar';
import SlotIcon from '../../icons/slot';
import ExtrasIcon from '../../icons/extras';

const SessionHeader = ({ currentProduct }) =>
  <nav>
    <div>
      <CalendarIcon />
      <Text id="header.day">Day</Text>
    </div>
    <div>
      <SlotIcon />
      <Text id="header.slot">Slot</Text>
    </div>
    <div>
      <QuantitiesIcon />
      <Text id="header.quantities">Quantities</Text>
    </div>
    {currentProduct &&
      currentProduct._embedded.extraProducts &&
      currentProduct._embedded.extraProducts.length > 0 &&
      <div>
        <ExtrasIcon />
        <Text id="header.extras">Extras</Text>
      </div>}
  </nav>;
export default SessionHeader;
