import { runSaga } from 'redux-saga';

import rootSaga from '@redux/root-saga';

describe('Root saga', () => {

  it('should yield all sagas', () => {
    const generator = rootSaga();
    const result = generator.next().value;
    expect(result.type).toBe('ALL');
    expect(result.payload.length).toBeGreaterThan(0);
  });
});
