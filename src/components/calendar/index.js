// @flow
import { h, Component } from 'preact';
import styles from './style.scss';
import CalendarDay from './calendarday';

export default class Calendar extends Component {
  state = {
    loading: true,
    availabilities: []
  };

  constructor(props) {
    super(props);
    let today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    let firstDayOfCurrentMonth = new Date(today);
    firstDayOfCurrentMonth.setDate(1);
    props
      .getProductMonthAvailabilities(today.toISOString())
      .then(availabilities => {
        console.log(availabilities);
        this.setState({ availabilities, loading: false });
        return availabilities;
      });
    this.setState({ today, firstDayOfCurrentMonth });
  }

  previousMonth = e => {
    this.state.firstDayOfCurrentMonth.setMonth(
      this.state.firstDayOfCurrentMonth.getMonth() - 1
    );
    this.setState({
      firstDayOfCurrentMonth: this.state.firstDayOfCurrentMonth,
      loading: true
    });
    this.props
      .getProductMonthAvailabilities(
        this.state.firstDayOfCurrentMonth.toISOString().slice(0, -5)
      )
      .then(availabilities => {
        this.setState({ availabilities, loading: false });
        return availabilities;
      });
  };

  nextMonth = e => {
    this.state.firstDayOfCurrentMonth.setMonth(
      this.state.firstDayOfCurrentMonth.getMonth() + 1
    );
    this.setState({
      firstDayOfCurrentMonth: this.state.firstDayOfCurrentMonth,
      loading: true
    });
    this.props
      .getProductMonthAvailabilities(
        this.state.firstDayOfCurrentMonth.toISOString().slice(0, -5)
      )
      .then(availabilities => {
        this.setState({ availabilities, loading: false });
        return availabilities;
      });
  };

  onDayClick = day => {
    this.props.onDayClick(day);
  };

  render(props, { loading, today, firstDayOfCurrentMonth, availabilities }) {
    function isAvailable(day, availabilities) {
      return (
        availabilities &&
        availabilities.find(availability => {
          return (
            convertDate(new Date(availability.date)) === convertDate(day) &&
            availability.bookable
          );
        })
      );
    }
    return (
      <div>
        {loading
          ? <div>Loading...</div>
          : <div>
              <div>
                <span>
                  {today.toLocaleString('fr', { weekday: 'short' })}
                </span>
                <span>
                  {today.toLocaleString('fr', { month: 'long' })}
                </span>
                <span>
                  {today.getFullYear()}
                </span>
              </div>
              <div>
                {!(
                  firstDayOfCurrentMonth.getMonth() === today.getMonth() &&
                  firstDayOfCurrentMonth.getFullYear() === today.getFullYear()
                ) && <button onClick={this.previousMonth}>Previous</button>}
                <span>
                  {firstDayOfCurrentMonth.toLocaleString('fr', {
                    month: 'long'
                  })}
                </span>
                <span>
                  {firstDayOfCurrentMonth.getFullYear()}
                </span>
                <button onClick={this.nextMonth}>Next</button>
              </div>
              <table class={styles.calendar}>
                <thead>
                  <tr class={styles['week-days']}>
                    {getWeekDays().map(weekDay =>
                      <th key={weekDay}>
                        {weekDay}
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {getWeekNumber(firstDayOfCurrentMonth).map((week, index) =>
                    <tr key={index}>
                      {week.map(day => {
                        return (
                          <CalendarDay
                            key={day}
                            day={day}
                            available={isAvailable(day, availabilities)}
                            onDayClick={this.onDayClick}
                          />
                        );
                      })}
                    </tr>
                  )}
                </tbody>
              </table>
            </div>}
      </div>
    );
  }
}

function getWeekDays(locale, format) {
  let weekdaysShortFr = ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'];
  let weekdaysShortEn = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  if (locale === 'en') {
    return weekdaysShortEn;
  }
  return weekdaysShortFr;
}

function getWeekNumber(firstDayOfMonth) {
  let incrementalDate = new Date(firstDayOfMonth);
  incrementalDate.setUTCHours(0, 0, 0, 0);
  if (incrementalDate.getDay() !== 1) {
    if (incrementalDate.getDay() === 0) {
      incrementalDate.setDate(incrementalDate.getDate() - 6);
    } else {
      incrementalDate.setDate(
        incrementalDate.getDate() - (incrementalDate.getDay() - 1)
      );
    }
  }
  let daysWeeksArray = [];
  while (
    incrementalDate.getMonth() <= firstDayOfMonth.getMonth() &&
    incrementalDate.getYear() === firstDayOfMonth.getYear()
  ) {
    let weekArray = [];
    for (let i = 0; i < 7; i++) {
      weekArray.push(new Date(incrementalDate));
      incrementalDate.setDate(incrementalDate.getDate() + 1);
    }
    daysWeeksArray.push(weekArray);
  }
  return daysWeeksArray;
}

function convertDate(date) {
  let yyyy = date.getFullYear().toString();
  let mm = (date.getMonth() + 1).toString();
  let dd = date.getDate().toString();

  let mmChars = mm.split('');
  let ddChars = dd.split('');

  return (
    yyyy +
    '-' +
    (mmChars[1] ? mm : '0' + mmChars[0]) +
    '-' +
    (ddChars[1] ? dd : '0' + ddChars[0])
  );
}
