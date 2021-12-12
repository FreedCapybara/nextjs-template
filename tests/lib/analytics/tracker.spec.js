import React from 'react';
import ReactGA from 'react-ga';

import { shallowWrapped } from '@tests/wrapper';

import { initTracker, trackEvent, trackPage, withTracker } from '@lib/analytics';

class TestComponent extends React.Component {
  render() {
    return <div />;
  }
}

describe('Tracker', () => {

  it('should initTracker', () => {
    const spy = jest.spyOn(ReactGA, 'initialize');
    initTracker('test');
    expect(spy).toHaveBeenCalled();
  });

  it('should trackEvent', () => {
    const spy = jest.spyOn(ReactGA, 'event');
    trackEvent('category', 'action', 'label', 'value', 'nonInteraction');
    expect(spy).toHaveBeenCalled();
  });

  it('should trackPage', () => {
    const spy = jest.spyOn(ReactGA, 'pageview');
    jest.spyOn(ReactGA, 'set');
    trackPage('/test', {});
    expect(spy).toHaveBeenCalled();
  });

  it('should render withTracker', () => {
    const spy = jest.spyOn(ReactGA, 'pageview');
    jest.spyOn(ReactGA, 'set');

    const TrackedComponent = withTracker(TestComponent);
    const location = { pathname: '/test', search: '' };

    const component = shallowWrapped(<TrackedComponent location={location} />);

    expect(component).toBeDefined();
    expect(spy).toHaveBeenCalled();
  });
});

