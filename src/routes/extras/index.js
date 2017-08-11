// @flow
import { h, Component } from 'preact';
import style from './style.scss';
import Extras from '../../components/extras';
import Button from '../../components/button';

export default class ExtrasRoute extends Component {
  updateCurrentQuantities = currentQuantities => {
    this.setState(currentQuantities);
  };

  onClickNext = () => {
    this.props.setCurrentQuantities(this.state);
  };

  render({ currentProduct }, { quantities }) {
    return (
      <div class={style.booker}>
        {currentProduct._embedded.extraProducts &&
          currentProduct._embedded.extraProducts.length &&
          <Extras
            extras={currentProduct._embedded.extraProducts}
            updateCurrentQuantities={this.updateCurrentQuantities}
          />}
        <Button
          label="Next"
          color="#fff"
          disabled={quantities ? false : true}
          handleClick={this.onClickNext}
        />
      </div>
    );
  }
}
