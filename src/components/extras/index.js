// @flow
import { h, Component } from 'preact';
import { Text } from 'preact-i18n';
import Extra from './extra';
import BookerContainer from '../bookercontainer';
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
    console.log(extras);
    return (
      <BookerContainer>
        <Text id="extras.title">Extras</Text>
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
      </BookerContainer>
    );
  }
}
