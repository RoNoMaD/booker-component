// @flow
import { h } from 'preact';
import styles from './style.scss';

const Button = ({ label, handleClick, color, disabled }) =>
  <button onClick={handleClick} disabled={disabled} class={styles.button}>
    {label}
  </button>;
export default Button;
