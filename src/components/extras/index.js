// @flow
import { h, Component } from 'preact';
import Extra from './extra';
import Button from '../button';

export default class Extras extends Component {
  state = {
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
    this.setState({
      quantities: this.state.quantities
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
      quantities: this.state.quantities
    });
  };

  onClickNext = () => {
    this.props.setCurrentQuantities(this.state);
  };

  render({ extras }, { quantities }) {
    return (
      <div>
        <div>Extras</div>
        {extras.map(extra =>
          <Extra
            key={extra.id}
            extra={extra}
            quantities={quantities}
            handleAddUnit={this.addUnit}
            handleSubUnit={this.subUnit}
          />
        )}
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
