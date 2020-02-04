import { runSaga } from 'redux-saga';

import { wrap } from '@redux/app/app-utilities';
import { appActions } from '@redux/app/app-actions';

describe('App utilities', () => {

  function * testSaga() {
  }

  function * testErrorSaga() { // eslint-disable-line require-yield
    throw 'test error';
  }

  it('should wrap a saga', async () => {
    const dispatched = [];
    const sagaOptions = {
      dispatch: (action) => dispatched.push(action)
    };
    await runSaga(sagaOptions, wrap(testSaga)).toPromise();

    expect(dispatched).toContainEqual(appActions.setError(false));
    expect(dispatched).toContainEqual(appActions.setLoading(true));
    expect(dispatched).toContainEqual(appActions.setLoading(false));
  });

  it('should wrap saga errors', async () => {
    spyOn(console, 'error'); // quiet the console
    const dispatched = [];
    const sagaOptions = {
      dispatch: (action) => dispatched.push(action)
    };
    await runSaga(sagaOptions, wrap(testErrorSaga)).toPromise();

    expect(dispatched).toContainEqual(appActions.setError(true));
  });
});
