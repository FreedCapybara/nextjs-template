
export const exampleActions = {
  increment: () => ({ type: 'INCREMENT' }),
  decrement: () => ({ type: 'DECREMENT' }),
  failure: (error) => ({ type: 'EXAMPLE_FAILURE', error: (error || true) }),
  exampleSaga: () => ({ type: 'EXAMPLE_SAGA' })
};

