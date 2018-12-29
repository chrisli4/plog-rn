import { handleActions } from 'redux-actions';
import * as types from '../constants/tasks';
import { addItem, deleteItems, editItem, deleteProps } from '../utils/reducers';
import initData from '../data/task';

const init = initData;

const reducer = handleActions(
  {
    [types.TASK_ADD_OBJ]: (state, action) => ({
      ...state,
      [action.payload.pid]: {
        allIds: [],
        byId: {},
      },
    }),

    [types.TASK_DELETE_OBJ]: (state, action) =>
      deleteProps(state, action.payload.pids),

    [types.TASK_ADD_SUCCESS]: (state, action) => ({
      ...state,
      [action.payload.pid]: addItem(
        state[action.payload.pid],
        action.payload.task
      ),
    }),

    [types.TASK_ADD_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload.error,
    }),

    [types.TASK_DELETE_SUCCESS]: (state, action) => ({
      ...state,
      [action.payload.pid]: deleteItems(
        state[action.payload.pid],
        action.payload.ids
      ),
    }),

    [types.TASK_DELETE_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload.error,
    }),
    [types.TASK_EDIT_SUCCESS]: (state, action) => ({
      ...state,
      [action.payload.pid]: editItem(
        state[action.payload.pid],
        action.payload.task
      ),
    }),

    [types.TASK_EDIT_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload.error,
    }),
  },
  init
);

export default reducer;
