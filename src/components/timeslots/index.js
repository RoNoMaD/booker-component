import { h, Component } from 'preact';

// @flow
export default class TimeSlots extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.props.productTimeSlotAvailabilities().then(timeSlots => {
      console.log(timeSlots);
      this.setState({ timeSlots, loading: false });
    });
  }

  onSlotClick = timeSlot => {
    this.props.onSlotClick(timeSlot);
  };

  render({}, { loading, timeSlots }) {
    return (
      <div>
        {loading
          ? <div>Loading</div>
          : <div>
              <div>Morning</div>
              {timeSlots
                .filter(
                  timeSlot => new Date(timeSlot.startDateTime).getHours() < 12
                )
                .map(timeSlot => {
                  return (
                    <TimeSlot
                      key={timeSlot.startDateTime}
                      slot={timeSlot}
                      onSlotClick={this.onSlotClick}
                    />
                  );
                })}
              <div>Afternoon</div>
              {timeSlots
                .filter(
                  timeSlot => new Date(timeSlot.startDateTime).getHours() >= 12
                )
                .map(timeSlot => {
                  return (
                    <TimeSlot
                      key={timeSlot.startDateTime}
                      slot={timeSlot}
                      onSlotClick={this.onSlotClick}
                    />
                  );
                })}
            </div>}
      </div>
    );
  }
}

function TimeSlot({ slot, onSlotClick }) {
  const onClick = () => {
    onSlotClick(slot);
  };
  return (
    <button onClick={onClick}>
      {new Date(slot.startDateTime).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })}
    </button>
  );
}
