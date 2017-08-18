// @flow
import { h, Component } from 'preact';
import { Text } from 'preact-i18n';
import Button from '../button';

type Props = {
  maxParticipants: number,
  setGiftQuantity: Function
};

type State = {
  quantity: number
};

export default class GiftQuantity extends Component<Props, State> {
  state = {
    quantity: 0
  };

  handleSubQuantity = () => {
    this.setState({
      quantity: this.state.quantity - 1
    });
  };

  handleAddQuantity = () => {
    this.setState({
      quantity: this.state.quantity + 1
    });
  };

  handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.props.setGiftQuantity(this.state.quantity);
  };

  render({ maxParticipants }, { quantity }) {
    console.log('GiftQuantities');
    return (
      <div>
        <Text id="gift.quantity">Quantity</Text>
        <form onSubmit={this.handleSubmit}>
          <div>
            <button
              type="button"
              disabled={quantity === 0}
              onClick={this.handleSubQuantity}
            >
              -
            </button>
            <div>
              {quantity}
            </div>
            <button
              type="button"
              disabled={maxParticipants > 0 && quantity === maxParticipants}
              onClick={this.handleAddQuantity}
            >
              +
            </button>
          </div>
          <Button
            label="Next"
            color="#fff"
            type="submit"
            disabled={quantity === 0 || quantity < maxParticipants}
          />
        </form>
      </div>
    );
  }
}
