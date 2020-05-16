const DATA = 'DATA';

const initialState = {
  data: [],
};

export const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
