const INFO = 'INFO';

const initialState = {
  info: false,
};

export const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case INFO:
      return {
        ...state,
        info: action.payload,
      };

    default:
      return state;
  }
};
