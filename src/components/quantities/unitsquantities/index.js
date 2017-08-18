// @flow
import { h, Component } from 'preact';
import { Text } from 'preact-i18n';
import Quantity from '../../quantity';
import Price from '../price';
import DegressivePrices from '../degressiveprices';
import Privatize from '../privatize';

export default class UnitsQuantities extends Component {
  state = {
    total: 0,
    maxReached: false,
    isPrivatized: false,
    quantities: new Map()
  };

  addUnit = unit => {
    if (this.state.quantities.get(unit.id)) {
      this.state.quantities.set(
        unit.id,
        this.state.quantities.get(unit.id) + 1
      );
    } else {
      this.state.quantities.set(unit.id, 1);
    }
    this.setState(
      {
        quantities: this.state.quantities,
        total: this.state.total + 1,
        maxReached: this.isMaxReached(this.state.total + 1)
      },
      () => {
        this.props.updateCurrentQuantities(this.state);
      }
    );
  };

  subUnit = unit => {
    if (this.state.quantities.get(unit.id)) {
      this.state.quantities.set(
        unit.id,
        this.state.quantities.get(unit.id) - 1
      );
    }
    this.setState(
      {
        quantities: this.state.quantities,
        total: this.state.total - 1,
        maxReached: this.isMaxReached(this.state.total - 1)
      },
      () => {
        this.props.updateCurrentQuantities(this.state);
      }
    );
  };

  onChangePrivatized = isPrivatized => {
    this.setState({ isPrivatized });
  };

  isMaxReached(total) {
    return (
      this.props.maxParticipants !== 0 && total === this.props.maxParticipants
    );
  }

  render(
    { units, minParticipants, canBePrivatized, minParticipantsToPrivatize },
    { quantities, total, maxReached }
  ) {
    return (
      <div>
        {canBePrivatized &&
          <Privatize
            onChangePrivatized={this.onChangePrivatized}
            minParticipantsToPrivatize={minParticipantsToPrivatize}
            total={total}
          />}
        {units.map((unit, index) => {
          return (
            <div key={index}>
              <Quantity
                unit={unit}
                quantity={quantities.get(unit.id) || 0}
                maxReached={maxReached}
                handleAddUnit={this.addUnit}
                handleSubUnit={this.subUnit}
              />
              {unit.prices && <Price prices={unit.prices} />}
              {unit.prices && <DegressivePrices prices={unit.prices} />}
            </div>
          );
        })}
        {minParticipants > 1 &&
          minParticipants > total &&
          <Text id="quantities.minParticipants" fields={{ minParticipants }}>
            A minimun of {minParticipants} is required.
          </Text>}
        {maxReached &&
          <Text id="quantities.maxReached">Maximum participants reached.</Text>}
      </div>
    );
  }
}
