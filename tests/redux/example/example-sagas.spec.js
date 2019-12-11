import {
  exampleSagas,
  exampleSaga
} from '@redux/example/example-sagas';
import { exampleActions } from '@redux/example/example-actions';

describe('Example sagas', () => {

  it('should get sagas', () => {
    expect(exampleSagas.length).toBe(1);
  });

  it('should run exampleSaga', () => {
    // Should test with runSaga, but this is kind of a weird saga
    // See https://dev.to/phil/the-best-way-to-test-redux-sagas-4hib
    // and "Testing the whole saga" https://redux-saga.js.org/docs/advanced/Testing.html
    const generator = exampleSaga();
    const result = generator.next().value;
    generator.next();
    expect(result.payload.action).toEqual(exampleActions.increment());
  });
});
