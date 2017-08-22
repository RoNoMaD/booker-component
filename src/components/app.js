// @flow
import { h, Component } from 'preact';

import { IntlProvider } from 'preact-i18n';
import fr from '../translations/fr.json';
import en from '../translations/en.json';

import ErrorMsg from './error';
import Header from './header';
import Quantities from './quantities';
import Day from './calendar';
import Slot from './timeslots';
import Extras from './extras';
import GiftQuantity from './giftquantity';
import GiftBeneficiary from './giftbeneficiary';
import { getProductById } from '../api/product';
import {
  getProductMonthAvailabilities,
  getProductTimeSlotAvailabilities,
  createBooking,
  createGiftBooking
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
    currentOrder: undefined,
    giftQuantity: undefined,
    giftBeneficiary: undefined
  };

  changeLocale = () => {
    this.setState({ locale: en });
  };

  setCurrentQuantities = currentQuantities => {
    let route;
    if (
      this.state.currentProduct._embedded.unit.type === 'MAIN' ||
      this.state.currentProduct._embedded.unit.type === 'FORFAIT'
    ) {
      route = 'day';
      this.setState({ currentQuantities, route });
    } else if (this.state.currentProduct._embedded.unit.type === 'SESSION') {
      this.setState({ currentQuantities }, () => {
        this.bookProduct();
      });
    }
  };

  getDayAvailabilities = fromDate => {
    if (this.state.currentQuantities) {
      return getProductMonthAvailabilities(
        this.state.currentProduct.id,
        fromDate,
        this.state.currentQuantities.quantities
      );
    } else {
      return getProductMonthAvailabilities(
        this.state.currentProduct.id,
        fromDate
      );
    }
  };

  setCurrentDay = currentDay => {
    let route;
    // TODO handle OPEN BILLET
    route = 'slot';
    this.setState({ currentDay, route });
  };

  getSlotAvailabilities = () => {
    return getProductTimeSlotAvailabilities(
      this.state.currentProduct.id,
      this.state.currentDay.toISOString()
    );
  };

  setCurrentSlot = currentSlot => {
    console.log('currentSlot', currentSlot);
    if (
      this.state.currentProduct._embedded.unit.type === 'MAIN' ||
      this.state.currentProduct._embedded.unit.type === 'FORFAIT'
    ) {
      if (
        this.state.currentProduct._embedded.extraProducts &&
        this.state.currentProduct._embedded.extraProducts.length
      ) {
        this.setState({ currentSlot, route: 'extras' });
      } else {
        this.setState({ currentSlot }, () => {
          this.bookProduct();
        });
      }
    } else if (this.state.currentProduct._embedded.unit.type === 'SESSION') {
      this.setState({ currentSlot, route: 'quantities' });
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
      .then(order => {
        this.setState({ currentOrder: order }, () => {
          console.log('this.props.setOrder', this.props.setOrder);
          this.props.setOrder(this.state.currentOrder);
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

  setGiftQuantity = giftQuantity => {
    this.setState({ giftQuantity, route: 'giftBeneficiary' });
  };

  setBeneficiary = currentBeneficiary => {
    createGiftBooking(
      this.state.currentProduct,
      this.state.giftQuantity,
      currentBeneficiary,
      this.state.currentOrder,
      this.state.currentCompany
    )
      .then(order => {
        this.setState({ currentOrder: order }, () => {
          console.log('this.props.setOrder', this.props.setOrder);
          this.props.setOrder(this.state.currentOrder);
        });
        return order;
      })
      .catch(error => {
        console.error('error creating booking', error);
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
        } else if (product.type === 'GIFT') {
          this.setState({
            loading: false,
            route: 'giftQuantity',
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
      currentSlot,
      currentExtrasQuantities,
      currentOrder
    }
  ) {
    return (
      <IntlProvider definition={locale}>
        <div id="app">
          {loading && <div>Loading...</div>}
          {error && <ErrorMsg error={error} />}
          {!loading &&
            <Header
              route={route}
              currentProduct={currentProduct}
              currentQuantities={currentQuantities}
              currentExtrasQuantities={currentExtrasQuantities}
              currentDay={currentDay}
              currentSlot={currentSlot}
            />}
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
              currentProduct={currentProduct}
              extras={currentProduct._embedded.extraProducts}
              setCurrentQuantities={this.setCurrentExtrasQuantities}
            />}
          {!loading &&
            route === 'giftQuantity' &&
            <GiftQuantity
              maxParticipants={currentProduct.maxParticipants}
              setGiftQuantity={this.setGiftQuantity}
            />}
          {!loading &&
            route === 'giftBeneficiary' &&
            <GiftBeneficiary setBeneficiary={this.setBeneficiary} />}
        </div>
      </IntlProvider>
    );
  }
}
