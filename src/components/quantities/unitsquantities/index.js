// @flow
import { h, Component } from 'preact';
import Quantity from '../../quantity';
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
            <Quantity
              key={index}
              unit={unit}
              quantity={quantities.get(unit.id) || 0}
              maxReached={maxReached}
              handleAddUnit={this.addUnit}
              handleSubUnit={this.subUnit}
            />
          );
        })}
        {minParticipants > 1 &&
          minParticipants > total &&
          <div>
            A minimun of {minParticipants} is required.
          </div>}
        {maxReached && <div>Maximum participants reached.</div>}
      </div>
    );
  }
}
