import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

const targets = ['default'];

export const initTracker = (trackingCode) => {
  let trackers = [];

  trackers.push({
    trackingId: trackingCode,
    gaOptions: {
      name: 'default'
    }
  });

  ReactGA.initialize(trackers, { debug: false });
};

export const trackEvent = (category, action, label, value, nonInteraction) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
    nonInteraction
  }, targets);
};

export const trackPage = (page, options) => {
  ReactGA.set({
    page,
    ...options,
  }, targets);
  ReactGA.pageview(page, targets);
};

export const withTracker = (WrappedComponent, options = {}) => {

  class HOC extends React.Component {
    componentDidMount() {
      const { location } = this.props;
      const page = location.pathname + location.search;
      trackPage(page, options);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  HOC.propTypes = {
    location: PropTypes.object
  };

  return HOC;
};

