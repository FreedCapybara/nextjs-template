import { exampleReducer, exampleInitialState } from '@redux/example/example-reducer';

describe('Example reducer', () => {

  it('should default to the current state', () => {
    const result = exampleReducer(undefined, { type: 'TEST' });
    expect(result.count).toBe(0);
    expect(result.error).toBe(false);
  });

  it('should increment', () => {
    const result = exampleReducer(exampleInitialState, { type: 'INCREMENT' });
    expect(result.count).toBe(1);
    expect(result.error).toBe(false);
  });

  it('should decrement', () => {
    const result = exampleReducer(exampleInitialState, { type: 'DECREMENT' });
    expect(result.count).toBe(-1);
    expect(result.error).toBe(false);
  });

  it('should handle failure', () => {
    const result = exampleReducer(exampleInitialState, { type: 'EXAMPLE_FAILURE', error: true });
    expect(result.count).toBe(0);
    expect(result.error).toBe(true);
  });
});
