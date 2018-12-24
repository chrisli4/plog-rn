import { all } from 'redux-saga/effects';
import watchPlants from './plants';
import watchTasks from './tasks';
import watchPhotos from './photos';

export default function* rootSaga() {
  yield all([watchPlants(), watchTasks(), watchPhotos()]);
}
