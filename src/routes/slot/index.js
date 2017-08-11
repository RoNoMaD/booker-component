// @flow
import { h, Component } from 'preact';
import { route } from 'preact-router';
import style from './style.scss';
import TimeSlots from '../../components/timeslots';
import { getProductTimeSlotAvailabilities } from '../../api/booking';
// import { getProductTimeSlotAvailabilities } from '../../api/booking/mock';

export default class Slot extends Component {
  constructor(props) {
    super(props);
    const { productId } = props;
    if (!this.props.currentProduct) {
      route(`/products/${productId}/booker/`);
    } else if (!this.props.currentDay) {
      route(`/products/${productId}/booker/day/`);
    }
  }
  onSlotClick = slot => {
    this.props.setCurrentSlot(slot);
  };

  getSlotAvailabilities = () => {
    return getProductTimeSlotAvailabilities(
      this.props.currentProduct.id,
      this.props.currentDay.toISOString()
    );
  };

  render() {
    return (
      <div class={style.booker}>
        <TimeSlots
          onSlotClick={this.onSlotClick}
          productTimeSlotAvailabilities={this.getSlotAvailabilities}
        />
      </div>
    );
  }
}
