import { all, put, call, select, takeEvery } from 'redux-saga/effects';
import { Permissions, ImagePicker, FileSystem } from 'expo';
import moment from 'moment';
import shortid from 'shortid';
import { PLANT_ADD, PLANT_DELETE, PLANT_EDIT } from '../constants/plants';
import { disableRemove } from '../actions/remove';
import { openModalPlant } from '../actions/modals';
import {
  addPlantSuccess,
  addPlantFailure,
  deletePlantSuccess,
  deletePlantFailure,
  editPlantSuccess,
  editPlantFailure,
} from '../actions/plants';

const path = `${FileSystem.documentDirectory}plog`;

function* addPlantSaga() {
  try {
    const { status } = yield call(
      [Permissions, 'askAsync'],
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );

    if (status === 'granted') {
      const result = yield call([ImagePicker, 'launchCameraAsync'], {
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!result.cancelled) {
        const id = shortid.generate();
        const uri = `${path}/${id}.png`;
        yield call([FileSystem, 'copyAsync'], { from: result.uri, to: uri });

        const plant = {
          id,
          uri,
          date: moment().format('YYYY-MM-DD'),
          name: 'Plant',
        };
        yield put(addPlantSuccess(plant));
        yield put(openModalPlant(plant));
      }
    }
  } catch (error) {
    yield put(addPlantFailure(error));
  }
}

function* deletePlantSaga() {
  try {
    const ids = yield select(state => state.remove.plants);
    yield all(
      ids.map(id =>
        call([FileSystem, 'deleteAsync'], `${path}/${id}.png`, {
          idempotent: true,
        })
      )
    );
    yield put(deletePlantSuccess(ids));
    yield put(disableRemove());
  } catch (error) {
    yield put(deletePlantFailure(error));
  }
}

function* editPlantSaga(action) {
  try {
    const { plant } = action.payload;
    yield put(editPlantSuccess(plant));
  } catch (error) {
    yield put(editPlantFailure(error));
  }
}

export default function* watchPlants() {
  yield all([
    takeEvery(PLANT_ADD, addPlantSaga),
    takeEvery(PLANT_DELETE, deletePlantSaga),
    takeEvery(PLANT_EDIT, editPlantSaga),
  ]);
}
