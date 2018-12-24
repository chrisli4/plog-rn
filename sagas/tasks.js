import { all, put, call, select, takeEvery } from 'redux-saga/effects'; 
import moment from 'moment';
import shortid from 'shortid';
import { PLANT_ADD_SUCCESS, PLANT_DELETE_SUCCESS } from '../constants/plants';
import { TASK_ADD, TASK_DELETE, TASK_EDIT } from '../constants/tasks';
import { addTaskObj, deleteTaskObj, addTaskSuccess, addTaskFailure, deleteTaskSuccess, deleteTaskFailure, editTaskSuccess, editTaskFailure } from '../actions/tasks';

function* addObj(action) {
  const pid = action.payload.plant.id;
  yield put(addTaskObj(pid));
}

function* deleteObj(action) {
  const pids = action.payload.ids;
  yield put(deleteTaskObj(pids));
}

function* addTaskSaga(action) {
  try {
    const { pid, task } = action.payload;
    const id = shortid.generate();
    const date = moment().format('YYYY-MM-DD');
    yield put(addTaskSuccess(pid, {
      ...task,
      id,
      date,
    }))
  } catch (error) {
    yield put(addTaskFailure(error));
  }
}

function* deleteTaskSaga(action) {
  try {
    const { pid } = action.payload;
    const { tasks } = yield select(state => state.remove);
    yield put(deleteTaskSuccess(pid, tasks));
  } catch (error) {
    yield put(deleteTaskFailure(error));
  }
}

function* editTaskSaga(action) {
  try {
    const { pid, task } = action.payload;
    yield put(editTaskSuccess(pid, task));
  } catch (error) {
    yield put(editTaskFailure(error));
  }
}

export default function* watchTasks() {
  yield all([
    takeEvery(PLANT_ADD_SUCCESS, addObj),
    takeEvery(PLANT_DELETE_SUCCESS, deleteObj),
    takeEvery(TASK_ADD, addTaskSaga),
    takeEvery(TASK_DELETE, deleteTaskSaga),
    takeEvery(TASK_EDIT, editTaskSaga),
  ])
}