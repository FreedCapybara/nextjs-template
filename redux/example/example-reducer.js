
export const exampleInitialState = {
  count: 0,
  error: false
};

export function exampleReducer(state = exampleInitialState, action) {

  switch (action.type) {
    case 'EXAMPLE_FAILURE':
      return {
        ...state,
        ...{ error: action.error }
      };

    case 'INCREMENT':
      return {
        ...state,
        ...{ count: state.count + 1 }
      };

    case 'DECREMENT':
      return {
        ...state,
        ...{ count: state.count - 1 }
      };

    default:
      return state;
  }
}

