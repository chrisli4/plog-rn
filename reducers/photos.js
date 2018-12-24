import { handleActions } from "redux-actions";
import * as types from '../constants/photos';
import { addItem, deleteItems, editItem, deleteProps } from '../utils/reducers';
import initData from '../data/photo';

const init = initData;

const reducer = handleActions(
  {

    [types.PHOTO_ADD_OBJ]: (state, action) => ({
      ...state,
      [action.payload.pid]: {
        allIds: [],
        byId: {},
      },
    }),

    [types.PHOTO_DELETE_OBJ]: (state, action) => deleteProps(state, action.payload.pids),
    [types.PHOTO_ADD_SUCCESS]: (state, action) => ({
      ...state,
      [action.payload.pid]: addItem(state[action.payload.pid], action.payload.photo),
    }),

    [types.PHOTO_ADD_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload.error,
    }),

    [types.PHOTO_DELETE_SUCCESS]: (state, action) => ({
      ...state,
      [action.payload.pid]: deleteItems(state[action.payload.pid], action.payload.ids),
    }),

    [types.PHOTO_DELETE_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload.error,
    }),
    [types.PHOTO_EDIT_SUCCESS]: (state, action) => ({
      ...state,
      [action.payload.pid]: editItem(state[action.payload.pid], action.payload.photo),
    }),

    [types.PHOTO_EDIT_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload.error,
    }),
  },
  init
);

export default reducer;
