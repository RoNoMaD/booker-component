// @flow
import { h, Component } from 'preact';
import style from './style.scss';
import Basket from '../../components/basket';
import { getOrder, getBookings } from '../../api/booking/mock';

export default class BasketRouter extends Component {
  state = {
    loading: true
  };

  // componentDidMount() {
  //   Promise.all([
  //     getOrder().then(order => {
  //       this.setState({ order });
  //       return order;
  //     }),
  //     getBookings().then(bookings => {
  //       this.setState({ bookings });
  //       return bookings;
  //     })
  //   ])
  //     .then(values => {
  //       this.setState({ loading: false });
  //       return values;
  //     })
  //     .catch(error => {
  //       console.error('error getting initial data', error);
  //     });
  // }

  render({ currentOrder }) {
    console.log(currentOrder);
    return (
      <div class={style.booker}>
        <h1>Basket</h1>
        <Basket order={currentOrder} />
      </div>
    );
  }
}
