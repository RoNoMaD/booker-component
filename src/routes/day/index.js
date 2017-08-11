// @flow
import { h, Component } from 'preact';
import { route } from 'preact-router';
import style from './style.scss';
import Calendar from '../../components/calendar';
import { getProductMonthAvailabilities } from '../../api/booking';

export default class Day extends Component {
  constructor(props) {
    super(props);
    if (!this.props.currentProduct) {
      route(`/products/${this.props.productId}/booker/`);
    }
  }

  onDayClick = day => {
    this.props.setCurrentDay(day);
  };

  getDayAvailabilities = fromDate => {
    return getProductMonthAvailabilities(
      this.props.currentProduct.id,
      fromDate,
      this.props.currentQuantities.quantities
    );
  };

  render() {
    return (
      <div class={style.booker}>
        <Calendar
          onDayClick={this.onDayClick}
          getProductMonthAvailabilities={this.getDayAvailabilities}
        />
      </div>
    );
  }
}
