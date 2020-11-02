const initialState = {
  count: 0
};

export const countReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_COUNT':
      return Object.assign({}, state, {
        count: action.value + 1
      });
    default:
      return state;
  }
};

export const addCount = count => {
  return {
    type: 'ADD_COUNT',
    value: count
  }
};
