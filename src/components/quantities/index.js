// @flow
import { h, Component } from 'preact';
import Button from '../button';
import BookerContainer from '../bookercontainer';
import UnitsQuantities from './unitsquantities';
import SessionsQuantities from './sessionsquantities';

export default class Quantities extends Component {
  state = {
    quantities: undefined,
    total: 0
  };

  updateCurrentQuantities = currentQuantities => {
    this.setState(currentQuantities);
  };

  onClickNext = () => {
    this.props.setCurrentQuantities(this.state);
  };

  render({ currentProduct }, { quantities, total }) {
    return (
      <BookerContainer>
        {currentProduct &&
          (currentProduct._embedded.unit.type === 'MAIN' ||
            currentProduct._embedded.unit.type === 'FORFAIT') &&
          <UnitsQuantities
            units={currentProduct.units}
            minParticipants={currentProduct.minParticipants}
            maxParticipants={currentProduct.maxParticipants}
            canBePrivatized={currentProduct.canBePrivatized}
            minParticipantsToPrivatize={
              currentProduct.minParticipantsToPrivatize
            }
            updateCurrentQuantities={this.updateCurrentQuantities}
          />}
        {currentProduct &&
          currentProduct._embedded.unit.type === 'SESSION' &&
          <SessionsQuantities
            units={currentProduct.units}
            minParticipants={currentProduct.minParticipants}
            maxParticipants={currentProduct.maxParticipants}
            canBePrivatized={currentProduct.canBePrivatized}
            minParticipantsToPrivatize={
              currentProduct.minParticipantsToPrivatize
            }
            updateCurrentQuantities={this.updateCurrentQuantities}
          />}
        <Button
          label="Next"
          color="#fff"
          disabled={
            !quantities || total === 0 || currentProduct.minParticipants > total
          }
          handleClick={this.onClickNext}
        />
      </BookerContainer>
    );
  }
}
