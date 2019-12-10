import { exampleActions } from '@redux/actions';

describe('Example actions', () => {

  it('should increment', () => {
    const result = exampleActions.increment();
    expect(result.type).toBe('INCREMENT');
  });

  it('should decrement', () => {
    const result = exampleActions.decrement();
    expect(result.type).toBe('DECREMENT');
  });

  it('should dispatch failure', () => {
    const result = exampleActions.failure();
    expect(result.type).toBe('EXAMPLE_FAILURE');
  });

  it('should run exampleSaga', () => {
    const result = exampleActions.exampleSaga();
    expect(result.type).toBe('EXAMPLE_SAGA');
  });
});
