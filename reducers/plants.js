import { handleActions } from 'redux-actions';
import * as types from '../constants/plants';
import { addItem, deleteItems, editItem } from '../utils/reducers';
import initData from '../data/plant';

const init = initData;

const reducer = handleActions(
  {
    [types.PLANT_SELECT]: (state, action) => ({
      ...state,
      selected: action.payload.plant,
    }),

    [types.PLANT_ADD_SUCCESS]: (state, action) =>
      addItem(state, action.payload.plant),

    [types.PLANT_ADD_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload.error,
    }),

    [types.PLANT_DELETE_SUCCESS]: (state, action) =>
      deleteItems(state, action.payload.ids),
    [types.PLANT_DELETE_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload.error,
    }),

    [types.PLANT_EDIT_SUCCESS]: (state, action) =>
      editItem(state, action.payload.plant),
    [types.PLANT_EDIT_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload.error,
    }),
  },
  init
);

export default reducer;
