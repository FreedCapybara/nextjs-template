import { runSaga } from 'redux-saga';

import { rootReducer, initialState } from '@redux/root-reducer';

describe('Root reducer', () => {

  it('should have initial state', () => {
    expect(initialState).toBeTruthy();
  });

  it('should create reducers', () => {
    const result = rootReducer();
    expect(result).toBeTruthy();
  });
});
