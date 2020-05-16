import {combineReducers} from 'redux';

import {DataReducer} from './DataReducer';
import {ModalReducer} from './ModalReducer';

export const rootReducer = combineReducers({
  Data: DataReducer,
  Modal: ModalReducer,
});
