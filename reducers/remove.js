import { handleActions } from "redux-actions";
import * as types from '../constants/remove';
import { addId, deleteId } from '../utils/reducers';

const init = {
  plants: [],
  photos: [],
  tasks: [],
  enabled: false,
};

const reducer = handleActions(
  {
    [types.REMOVE_ADD_PLANT]: (state, action) => ({
      ...state,
      plants: addId(state.plants, action.payload.id),
    }),

    [types.REMOVE_DELETE_PLANT]: (state, action) => ({
      ...state,
      plants: deleteId(state.plants, action.payload.id),
    }),

    [types.REMOVE_ADD_TASK]: (state, action) => ({
      ...state,
      tasks: addId(state.tasks, action.payload.id),
    }),

    [types.REMOVE_DELETE_TASK]: (state, action) => ({
      ...state,
      tasks: deleteId(state.tasks, action.payload.id),
    }),

    [types.REMOVE_ADD_PHOTO]: (state, action) => ({
      ...state,
      photos: addId(state.photos, action.payload.id),
    }),

    [types.REMOVE_DELETE_PHOTO]: (state, action) => ({
      ...state,
      photos: deleteId(state.photos, action.payload.id),
    }),

    [types.REMOVE_DELETE_PLANT]: (state, action) => ({
      ...state,
      plants: addId(state.plants, action.payload.id),
    }),

    [types.REMOVE_ADD_PHOTO]: (state, action) => ({
      ...state,
      plants: deleteId(state.plants, action.payload.id),
    }),

    [types.REMOVE_ENABLE]: state => ({
      ...state,
      plants: [],
      photos: [],
      tasks: [],
      enabled: true,
    }),

    [types.REMOVE_DISABLE]: state => ({
      ...state,
      enabled: false,
    }),
  },
  init,
);

export default reducer;
