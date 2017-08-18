import { h, Component } from 'preact';
import { Text } from 'preact-i18n';

export default class Privatize extends Component {
  state = {
    isPrivatized: false
  };

  constructor(props) {
    super(props);
  }

  togglePrivatized = e => {
    this.setState({
      isPrivatized: e.target.checked
    });
    this.props.onChangePrivatized(e.target.checked);
  };

  isMinimunParticipantsReached(
    isPrivatized,
    total,
    minParticipantsToPrivatize
  ) {
    return (
      isPrivatized &&
      total < minParticipantsToPrivatize &&
      minParticipantsToPrivatize > 1
    );
  }

  render({ total, minParticipantsToPrivatize }, { isPrivatized }) {
    let showMinimunParticipantsWarning = this.isMinimunParticipantsReached(
      isPrivatized,
      total,
      minParticipantsToPrivatize
    );
    return (
      <div>
        <Text id="quantities.privatize">Privatize this activity</Text>
        <div>
          <label class="switch">
            <input
              type="checkbox"
              checked={isPrivatized}
              onChange={this.togglePrivatized}
            />
            <span class="slider round" />
          </label>
        </div>
        {showMinimunParticipantsWarning &&
          <Text
            id="quantities.minParticipantsToPrivatize"
            fields={{ minParticipantsToPrivatize }}
          >
            A minimun of {minParticipantsToPrivatize} is required to privatize
            this activity.
          </Text>}
      </div>
    );
  }
}
