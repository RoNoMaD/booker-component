// @flow
import { h, Component } from 'preact';
import { Text } from 'preact-i18n';
import Button from '../button';

type Props = {
  setBeneficiary: Function
};

type State = {
  firstName: string,
  lastName: string,
  email: string,
  phone: string
};

export default class GiftBeneficiary extends Component<Props, State> {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  handleInputChange = ({ target }: SyntheticInputEvent<HTMLInputElement>) => {
    const value: boolean | string =
      target.type === 'checkbox' ? target.checked : target.value;
    const name: string = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.props.setBeneficiary(this.state);
  };

  render() {
    return (
      <div>
        <Text id="giftBeneficiary.title">Beneficiary</Text>
        <form onSubmit={this.handleSubmit}>
          <input
            name="firstName"
            type="text"
            placeholder="firstName"
            onChange={this.handleInputChange}
          />
          <input
            name="lastName"
            type="text"
            placeholder="lastName"
            onChange={this.handleInputChange}
          />
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={this.handleInputChange}
          />
          <input
            name="phone"
            type="tel"
            placeholder="phone"
            onChange={this.handleInputChange}
          />
          <Button label="Next" color="#fff" type="submit" />
        </form>
      </div>
    );
  }
}
