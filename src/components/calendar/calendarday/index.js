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
  const onClick = () => {
    onDayClick(day);
  };
  return (
    <td onClick={onClick} class={styles.day}>
      {available ? 'Available' : day.getDate()}
    </td>
  );
}
