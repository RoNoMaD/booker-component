import { h, Component } from 'preact';

export default class Privatize extends Component {
  state = {
    isPrivatized: false
  };

  constructor(props) {
    super(props);
  }

  togglePrivatized = e => {
    console.log(e.target.checked);
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
        <div>Privatize this activity</div>
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
          <div>
            A minimun of {minParticipantsToPrivatize} is required to privatize
            this activity.
          </div>}
      </div>
    );
  }
}
