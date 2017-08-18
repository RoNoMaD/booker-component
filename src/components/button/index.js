// @flow
import { h } from 'preact';
import styles from './style.scss';

const Button = ({
  type,
  label,
  handleClick,
  color,
  disabled
}: {
  type?: string,
  label?: string,
  handleClick?: Function,
  color?: string,
  disabled?: boolean
}) =>
  <button
    type={type || 'button'}
    onClick={handleClick}
    disabled={disabled}
    class={styles.button}
  >
    {label}
  </button>;
export default Button;
