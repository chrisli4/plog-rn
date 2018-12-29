import { handleActions } from 'redux-actions';
import * as types from '../constants/screen';

const init = {
  current: 'Home',
};

const reducer = handleActions(
  {
    [types.SCREEN_SET_CURRENT]: (state, action) => ({
      ...state,
      current: action.payload.screen,
    }),

    [types.SCREEN_CLEAR_CURRENT]: () => ({
      ...init,
    }),
  },
  init
);

export default reducer;
