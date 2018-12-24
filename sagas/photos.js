import { all, put, call, select, takeEvery } from 'redux-saga/effects';
import { Permissions, ImagePicker, FileSystem } from 'expo';
import moment from 'moment';
import shortid from 'shortid';
import { PLANT_ADD_SUCCESS, PLANT_DELETE_SUCCESS } from '../constants/plants';
import { PHOTO_ADD, PHOTO_EDIT, PHOTO_DELETE } from '../constants/photos';
import { addPhotoObj, deletePhotoObj, addPhotoSuccess, addPhotoFailure, deletePhotoSuccess, deletePhotoFailure, editPhotoSuccess, editPhotoFailure } from '../actions/photos';

const path = `${FileSystem.documentDirectory}plog`;

function* addObj(action) {
  const pid = action.payload.plant.id;
  yield put(addPhotoObj(pid));
}

function* deleteObj(action) {
  const { ids } = action.payload;
  const photos = yield select(state => state.photos);
  const photoIds = ids.reduce((acc, id) => [...acc, ...photos[id].allIds], []);
  yield all(photoIds.map(id => call([FileSystem, 'deleteAsync'], `${path}/${id}.png`, { idempotent: true })));
  yield put(deletePhotoObj(ids));
}

function* addPhotoSaga(action) {
  try {
    const { status } = yield call([Permissions, 'askAsync'], Permissions.CAMERA, Permissions.CAMERA_ROLL);

    if (status === 'granted') {
      let result = yield call([ImagePicker, 'launchCameraAsync'], { allowsEditing: true, aspect: [4, 3] });

      if (!result.cancelled) {
        const { pid } = action.payload;
        const id = shortid.generate();
        const uri = `${path}/2.png`;
        yield call([FileSystem, 'copyAsync'], { from: result.uri, to: uri})
        yield put(addPhotoSuccess(pid, {
          id,
          uri,
          date: moment().format('YYYY-MM-DD'),
          comment: '', 
        }))
      }
    }
  } catch (error) {
    yield put(addPhotoFailure(error));
  }
}

function* deletePhotoSaga(action) {
  try {
    const { pid } = action.payload;
    const ids = yield select(state => state.remove.photos);
    yield all(ids.map(id => call([FileSystem, 'deleteAsync'], `${path}/${id}.png`, { idempotent: true })));
    yield put(deletePhotoSuccess(pid, ids));
  } catch (error) {
    yield put(deletePhotoFailure(error));
  }
}

function* editPhotoSaga(action) {
  try {
    const { pid, photo } = action.payload;
    yield put(editPhotoSuccess(pid, photo));
  } catch (error) {
    yield put(editPhotoFailure(error));
  }
}

export default function* watchPhotos() {
  yield all([
    takeEvery(PLANT_ADD_SUCCESS, addObj),
    takeEvery(PLANT_DELETE_SUCCESS, deleteObj),
    takeEvery(PHOTO_ADD, addPhotoSaga),
    takeEvery(PHOTO_EDIT, editPhotoSaga),
    takeEvery(PHOTO_DELETE, deletePhotoSaga),
  ])
}