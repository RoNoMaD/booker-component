// @flow
import { h, Component } from 'preact';
import { Router, route } from 'preact-router';

import { IntlProvider } from 'preact-i18n';
import fr from '../translations/fr.json';
import en from '../translations/en.json';

import ErrorMsg from './error';
import Header from './header';
// import Booker from '../routes/booker';
import Quantities from './quantities';
// import Quantities from '../routes/quantities';
import Day from './calendar';
// import Day from '../routes/day';
import Slot from './timeslots';
// import Slot from '../routes/slot';
import Extras from './extras';
// import Extras from '../routes/extras';
// import Basket from '../routes/basket';
// import Quantities from 'async!../routes/quantities';
// import Day from 'async!../routes/day';
// import Slot from 'async!../routes/slot';
// import Extras from 'async!../routes/extras';
// import Basket from 'async!../routes/basket';
import { getProductById } from '../api/product';
import {
  getProductMonthAvailabilities,
  getProductTimeSlotAvailabilities,
  createBooking
} from '../api/booking';

export default class App extends Component {
  state = {
    loading: true,
    locale: fr,
    currentCompany: {
      id: 271,
      type: 'RESELLER'
    },
    currentProduct: undefined,
    currentQuantities: undefined,
    currentExtrasQuantities: undefined,
    currentDay: undefined,
    currentSlot: undefined,
    currentOrder: undefined
  };

  changeLocale = () => {
    this.setState({ locale: en });
  };

  setCurrentProduct = (currentProduct, url: string) => {
    this.setState({ currentProduct }, () => {
      route(url);
    });
  };

  setCurrentQuantities = currentQuantities => {
    let route;
    if (this.state.currentProduct._embedded.unit.type === 'MAIN') {
      route = 'day';
    }
    this.setState({ currentQuantities, route });
  };

  getDayAvailabilities = fromDate => {
    return getProductMonthAvailabilities(
      this.state.currentProduct.id,
      fromDate,
      this.state.currentQuantities.quantities
    );
  };

  setCurrentDay = currentDay => {
    // this.setState({ currentDay }, () => {
    //   route(`/products/${this.state.currentProduct.id}/booker/slot/`);
    // });
    let route;
    // TODO handle OPEN BILLET
    // if (this.state.currentProduct.) {
    route = 'slot';
    // } else {
    //   route = 'extra';
    // }
    this.setState({ currentDay, route });
  };

  getSlotAvailabilities = () => {
    return getProductTimeSlotAvailabilities(
      this.state.currentProduct.id,
      this.state.currentDay.toISOString()
    );
  };

  setCurrentSlot = currentSlot => {
    if (
      this.state.currentProduct._embedded.extraProducts &&
      this.state.currentProduct._embedded.extraProducts.length
    ) {
      this.setState({ currentSlot, route: 'extras' });
      // route(`/products/${this.state.currentProduct.id}/booker/extras/`);
    } else {
      this.setState({ currentSlot }, () => {
        this.bookProduct();
      });
    }
  };

  bookProduct = () => {
    createBooking(
      this.state.currentProduct,
      this.state.currentQuantities,
      this.state.currentDay,
      this.state.currentSlot,
      this.state.currentExtrasQuantities,
      this.state.currentOrder,
      this.state.currentCompany
    )
      // createBooking()
      .then(order => {
        this.setState({ currentOrder: order }, () => {
          route(`/products/basket/`);
        });
        return order;
      })
      .catch(error => {
        console.error('error creating booking', error);
      });
  };

  setCurrentExtrasQuantities = currentExtrasQuantities => {
    this.setState({ currentExtrasQuantities }, () => {
      this.bookProduct();
    });
  };

  componentDidMount() {
    getProductById(this.props.productId)
      .then(product => {
        if (
          product.type === 'CLASSIC' &&
          (product._embedded.unit.type === 'MAIN' ||
            product._embedded.unit.type === 'FORFAIT')
        ) {
          this.setState({
            loading: false,
            route: 'quantities',
            currentProduct: product
          });
        } else if (
          product.type === 'CLASSIC' &&
          product._embedded.unit.type === 'SESSION'
        ) {
          this.setState({
            loading: false,
            route: 'day',
            currentProduct: product
          });
        }
        return product;
      })
      .catch(error => {
        this.setState({ error });
        console.error('error getting initial data', error);
      });
  }

  render(
    props,
    {
      loading,
      error,
      route,
      locale,
      currentProduct,
      currentQuantities,
      currentDay,
      currentOrder
    }
  ) {
    return (
      <IntlProvider definition={locale}>
        <div id="app">
          {loading && <div>Loading...</div>}
          {error && <ErrorMsg error={error} />}
          {!loading &&
            route === 'quantities' &&
            <Quantities
              currentProduct={currentProduct}
              setCurrentQuantities={this.setCurrentQuantities}
            />}
          {!loading &&
            route === 'day' &&
            <Day
              currentProduct={currentProduct}
              onDayClick={this.setCurrentDay}
              getProductMonthAvailabilities={this.getDayAvailabilities}
            />}
          {!loading &&
            route === 'slot' &&
            <Slot
              onSlotClick={this.setCurrentSlot}
              productTimeSlotAvailabilities={this.getSlotAvailabilities}
            />}
          {!loading &&
            route === 'extras' &&
            <Extras
              path="/products/:productId/booker/extras/"
              currentProduct={currentProduct}
              setCurrentQuantities={this.setCurrentExtrasQuantities}
            />}
          {/*<Header currentProduct={currentProduct} />
          <Router onChange={this.handleRoute}>
            <Booker
              path="/products/:productId/booker/"
              setCurrentProduct={this.setCurrentProduct}
            />
            <Quantities
              path="/products/:productId/booker/quantities/"
              currentProduct={currentProduct}
              setCurrentQuantities={this.setCurrentQuantities}
            />
            <Day
              path="/products/:productId/booker/day/"
              currentProduct={currentProduct}
              setCurrentDay={this.setCurrentDay}
              currentQuantities={currentQuantities}
            />
            <Slot
              path="/products/:productId/booker/slot/"
              currentProduct={currentProduct}
              currentDay={currentDay}
              setCurrentSlot={this.setCurrentSlot}
            />
            <Extras
              path="/products/:productId/booker/extras/"
              currentProduct={currentProduct}
              setCurrentQuantities={this.setCurrentExtrasQuantities}
            />
            <Basket path="/products/basket/" currentOrder={currentOrder} />
          </Router>*/}
        </div>
      </IntlProvider>
    );
  }
}
