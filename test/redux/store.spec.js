import { runSaga } from 'redux-saga';

import configureStore from '@redux/store';

describe('Store', () => {

  it('should configure', () => {
    const result = configureStore();
    expect(result).toBeTruthy();
  });

  it('should configure with state', () => {
    const state = { exampleState: { count: 9000 } };
    const result = configureStore(state, true);
    expect(result).toBeTruthy();
  });

  it('should configure without dev tools', () => {
    const result = configureStore(undefined, false);
    expect(result).toBeTruthy();
  });
});
