import { handleActions } from "redux-actions";
import moment from 'moment';
import * as types from '../constants/filter';

const init = {
  start: '2018-11-14',
  end: moment().format('YYYY-MM-DD'),
}

const reducer = handleActions(
  {
    [types.FILTER_ADD]: (state, action) => ({
      ...state,
      start: action.payload.start,
      end: action.payload.end,
    }),

    [types.FILTER_REMOVE]: () => ({
      ...init,
    }),
  }, 
  init
  );

export default reducer;