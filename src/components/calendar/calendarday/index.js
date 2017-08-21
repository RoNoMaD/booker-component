// @flow
import { h } from 'preact';
import styles from './style.scss';

export default function CalendarDay({
  day,
  available,
  onDayClick
}: {
  day: Date,
  available: boolean,
  onDayClick: Function
}) {
  let timeoutID;
  const onClick = () => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => onDayClick(day), 1500);
  };
  return (
    <td class={styles.day}>
      {available
        ? <button class={styles.available} onClick={onClick}>
            {day.getDate()}
          </button>
        : <div>
            {day.getDate()}
          </div>}
    </td>
  );
}
