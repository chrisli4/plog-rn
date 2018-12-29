import { createAction } from 'redux-actions';
import * as types from '../constants/remove';

export const addRemovePlant = createAction(types.REMOVE_ADD_PLANT, id => ({
  id,
}));
export const deleteRemovePlant = createAction(
  types.REMOVE_DELETE_PLANT,
  id => ({
    id,
  })
);

export const addRemoveTask = createAction(types.REMOVE_ADD_TASK, id => ({
  id,
}));
export const deleteRemoveTask = createAction(types.REMOVE_DELETE_TASK, id => ({
  id,
}));

export const addRemovePhoto = createAction(types.REMOVE_ADD_PHOTO, id => ({
  id,
}));

export const deleteRemovePhoto = createAction(
  types.REMOVE_DELETE_PHOTO,
  id => ({
    id,
  })
);

export const enableRemove = createAction(types.REMOVE_ENABLE);
export const disableRemove = createAction(types.REMOVE_DISABLE);
