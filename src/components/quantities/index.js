// @flow
import { h, Component } from 'preact';
// import { route } from 'preact-router';
import style from './style.scss';
import Button from '../button';
import UnitsQuantities from './unitsquantities';

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
    console.log(currentProduct);
    return (
      <div class={style.booker}>
        {currentProduct &&
          currentProduct._embedded.unit.type === 'MAIN' &&
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
        <Button
          label="Next"
          color="#fff"
          disabled={
            !quantities || total === 0 || currentProduct.minParticipants > total
          }
          handleClick={this.onClickNext}
        />
      </div>
    );
  }
}
