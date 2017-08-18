import { h, Component } from 'preact';
import { Text } from 'preact-i18n';
import Privatize from '../privatize';
import Quantity from '../../quantity';
import Price from '../price';

export default class SessionsQuantities extends Component {
  state = {
    total: 0,
    maxReached: false,
    isPrivatized: false,
    quantities: []
  };

  addUnit = unit => {
    let unitIndex = this.state.quantities.findIndex(
      quantity => quantity.numberOfSessions === unit.numberOfSessions
    );
    if (unitIndex !== -1) {
      const quantities = [...this.state.quantities];
      quantities[unitIndex].quantity = quantities[unitIndex].quantity + 1;
      this.setState(
        {
          quantities,
          total: this.state.total + 1,
          maxReached: this.isMaxReached(this.state.total + 1)
        },
        () => {
          this.props.updateCurrentQuantities(this.state);
        }
      );
    } else {
      this.setState(
        {
          quantities: [
            ...this.state.quantities,
            {
              id: unit.id,
              numberOfSessions: unit.numberOfSessions,
              quantity: 1
            }
          ],
          total: this.state.total + 1,
          maxReached: this.isMaxReached(this.state.total + 1)
        },
        () => {
          this.props.updateCurrentQuantities(this.state);
        }
      );
    }
  };

  subUnit = unit => {
    let unitIndex = this.state.quantities.findIndex(
      quantity => quantity.numberOfSessions === unit.numberOfSessions
    );
    if (unitIndex !== -1) {
      const quantities = [...this.state.quantities];
      quantities[unitIndex].quantity = quantities[unitIndex].quantity - 1;
      this.setState(
        {
          quantities,
          total: this.state.total - 1,
          maxReached: this.isMaxReached(this.state.total - 1)
        },
        () => {
          this.props.updateCurrentQuantities(this.state);
        }
      );
    }
  };

  isMaxReached(total) {
    return total === this.props.maxParticipants;
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
                quantity={
                  this.state.quantities.findIndex(
                    quantity =>
                      quantity.numberOfSessions === unit.numberOfSessions
                  ) !== -1
                    ? quantities[
                        this.state.quantities.findIndex(
                          quantity =>
                            quantity.numberOfSessions === unit.numberOfSessions
                        )
                      ].quantity
                    : 0
                }
                maxReached={maxReached}
                handleAddUnit={this.addUnit}
                handleSubUnit={this.subUnit}
              />
              {unit.prices && <Price prices={unit.prices} />}
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
