import { createAction } from 'redux-actions';
import * as types from '../constants/photos';

export const addPhotoObj = createAction(types.PHOTO_ADD_OBJ, pid => ({
  pid,
}));

export const deletePhotoObj = createAction(types.PHOTO_DELETE_OBJ, pids => ({
  pids,
}));

export const addPhoto = createAction(types.PHOTO_ADD, pid => ({
  pid,
}));
export const addPhotoSuccess = createAction(
  types.PHOTO_ADD_SUCCESS,
  (pid, photo) => ({
    pid,
    photo,
  })
);
export const addPhotoFailure = createAction(types.PHOTO_ADD_FAILURE, error => ({
  error,
}));

export const deletePhoto = createAction(types.PHOTO_DELETE, pid => ({
  pid,
}));
export const deletePhotoSuccess = createAction(
  types.PHOTO_DELETE_SUCCESS,
  (pid, ids) => ({
    pid,
    ids,
  })
);
export const deletePhotoFailure = createAction(
  types.PHOTO_DELETE_FAILURE,
  error => ({
    error,
  })
);

export const editPhoto = createAction(types.PHOTO_EDIT, (pid, photo) => ({
  pid,
  photo,
}));
export const editPhotoSuccess = createAction(
  types.PHOTO_EDIT_SUCCESS,
  (pid, photo) => ({
    pid,
    photo,
  })
);
export const editPhotoFailure = createAction(
  types.PHOTO_EDIT_FAILURE,
  error => ({
    error,
  })
);
