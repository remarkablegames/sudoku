import { h, render } from 'preact';

/**
 * Initializes app.
 */
const bootstrap = () => {
  // initialize google analytics
  require('./helpers/ga');

  // render game
  const Game = require('./Game');
  render(<Game />, document.getElementById('root'));
};

/**
 * Try to load polyfill before app.
 */
if (process.env.NODE_ENV === 'development') {
  bootstrap();
} else {
  window.requirejs(
    bootstrap,
    bootstrap // http://requirejs.org/docs/api.html#errbacks
  );
}
