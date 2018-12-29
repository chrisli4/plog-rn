import { handleActions } from 'redux-actions';
import * as types from '../constants/modals';

const init = {
  plant: {},
  plantVisible: false,
  taskVisible: false,
  calendarVisible: false,
  chartVisible: false,
};

const reducer = handleActions(
  {
    [types.MODAL_OPEN_PLANT]: (state, action) => ({
      ...state,
      plant: action.payload.plant,
      plantVisible: true,
    }),

    [types.MODAL_CLOSE_PLANT]: state => ({
      ...state,
      plant: {},
      plantVisible: false,
    }),

    [types.MODAL_OPEN_TASK]: state => ({
      ...state,
      taskVisible: true,
    }),

    [types.MODAL_OPEN_CALENDAR]: state => ({
      ...state,
      calendarVisible: true,
    }),

    [types.MODAL_OPEN_CHART]: state => ({
      ...state,
      chartVisible: true,
    }),

    [types.MODAL_CLOSE_TASK]: state => ({
      ...state,
      taskVisible: false,
    }),

    [types.MODAL_CLOSE_CALENDAR]: state => ({
      ...state,
      calendarVisible: false,
    }),

    [types.MODAL_CLOSE_CHART]: state => ({
      ...state,
      chartVisible: false,
    }),
  },
  init
);

export default reducer;
