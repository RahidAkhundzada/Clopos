const INFO = 'INFO';
const ADMIN = 'ADMIN';
const WISH='WISH'
const initialState = {
  info: false,
  admin: false,
  wish:false,
};

export const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case INFO:
      return {
        ...state,
        info: action.payload,
      };
    case ADMIN:
      return {
        ...state,
        admin: action.payload,
      };
      case WISH:
      return {
        ...state,
        wish: action.payload,
      };

    default:
      return state;
  }
};
