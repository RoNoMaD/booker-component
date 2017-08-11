import { h, Component } from 'preact';
import Quantity from '../quantity';

export default class SessionsQuantities extends Component {
  state = {
    total: 0,
    maxReached: false
  };

  constructor({ units, maxParticipants, canBePrivatized }) {
    super({ units, maxParticipants });
    console.log(units);
    this.setState({ quantities: new Map() });
  }

  addUnit = unit => {
    if (this.state.quantities.get(unit.id)) {
      this.state.quantities.set(
        unit.id,
        this.state.quantities.get(unit.id) + 1
      );
    } else {
      this.state.quantities.set(unit.id, 1);
    }
    this.setState({
      quantities: this.state.quantities,
      total: this.state.total + 1,
      maxReached: this.isMaxReached(this.state.total + 1)
    });
  };

  subUnit = unit => {
    if (this.state.quantities.get(unit.id)) {
      this.state.quantities.set(
        unit.id,
        this.state.quantities.get(unit.id) - 1
      );
    }
    this.setState({
      quantities: this.state.quantities,
      total: this.state.total - 1,
      maxReached: this.isMaxReached(this.state.total - 1)
    });
  };

  isMaxReached(total) {
    return total === this.props.maxParticipants;
  }

  render({ units, maxParticipants }, { quantities, total, maxReached }) {
    return <div />;
  }
}
