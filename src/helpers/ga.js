const { ga, requirejs } = window;

ga('create', 'UA-59233605-5', 'auto');

// https://developers.google.com/analytics/devguides/collection/analyticsjs/debugging
let url = 'https://www.google-analytics.com/analytics.js';
if (
  process.env.NODE_ENV === 'development' ||
  location.hostname === 'localhost'
) {
  url = url.replace('analytics.js', 'analytics_debug.js');
  ga('set', 'sendHitTask', null);
}

ga('set', {
  title: 'Sudoku',
  page: '/sudoku/',
});
ga('send', 'pageview');

requirejs([url]);

/**
 * Tracks event with analytics.
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/events
 *
 * @param {String} eventCategory
 * @param {String} eventAction
 * @param {String} [eventLabel]
 * @param {Number} [eventValue]
 */
export const trackEvent = (...args) => {
  window.ga.apply(null, ['send', 'event', ...args]);
};
