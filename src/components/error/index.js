import { h } from 'preact';

const Error = ({ error }) =>
  <div>
    <div>Look like your server threw an error !</div>
    <div>
      {error.type}
    </div>
    <div>
      {error.message}
    </div>
  </div>;

export default Error;
