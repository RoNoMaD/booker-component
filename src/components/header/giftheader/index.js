// @flow
import { h } from 'preact';
import { Text } from 'preact-i18n';
import './style.scss';

import QuantitiesIcon from '../../icons/quantities';
import BeneficiaryIcon from '../../icons/beneficiary';

const GiftHeader = ({ currentProduct }) =>
  <nav>
    <div>
      <QuantitiesIcon />
      <Text id="header.quantities">Quantities</Text>
    </div>
    <div>
      <BeneficiaryIcon />
      <Text id="header.beneficiary">Beneficiary</Text>
    </div>}
  </nav>;
export default GiftHeader;
