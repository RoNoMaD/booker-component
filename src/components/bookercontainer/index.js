// @flow
import { h } from 'preact';
import style from './style.scss';

export default function BookerContainer({ children }) {
  return (
    <div class={style['booker-container']}>
      {children}
    </div>
  );
}
