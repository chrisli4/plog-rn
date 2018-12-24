import { handleActions } from "redux-actions";
import * as types from '../constants/modals';

const init = {
  taskVisible: false,
  calendarVisible: false,
}

const reducer = handleActions(
  {
    [types.MODAL_OPEN_TASK]: state => ({
      ...state,
      taskVisible: true,
    }),

    [types.MODAL_OPEN_CALENDAR]: state => ({
      ...state,
      calendarVisible: true,
    }),

    [types.MODAL_CLOSE_TASK]: state => ({
      ...state,
      taskVisible: false,
    }),

    [types.MODAL_CLOSE_CALENDAR]: state => ({
      ...state,
      calendarVisible: false,
    }),
  }, 
  init
);

export default reducer;