import { createAction } from 'redux-actions';
import * as types from '../constants/tasks';

export const addTaskObj = createAction(types.TASK_ADD_OBJ, pid => ({
  pid,
}));

export const deleteTaskObj = createAction(types.TASK_DELETE_OBJ, pids => ({
  pids,
}));

export const addTask = createAction(types.TASK_ADD, (pid, task) => ({
  pid,
  task,
}));
export const addTaskSuccess = createAction(
  types.TASK_ADD_SUCCESS,
  (pid, task) => ({
    pid,
    task,
  })
);
export const addTaskFailure = createAction(types.TASK_ADD_FAILURE, error => ({
  error,
}));

export const deleteTask = createAction(types.TASK_DELETE, pid => ({
  pid,
}));
export const deleteTaskSuccess = createAction(
  types.TASK_DELETE_SUCCESS,
  (pid, ids) => ({
    pid,
    ids,
  })
);
export const deleteTaskFailure = createAction(
  types.TASK_DELETE_FAILURE,
  error => ({
    error,
  })
);

export const editTask = createAction(types.TASK_EDIT, (pid, task) => ({
  pid,
  task,
}));
export const editTaskSuccess = createAction(
  types.TASK_EDIT_SUCCESS,
  (pid, task) => ({
    pid,
    task,
  })
);
export const editTaskFailure = createAction(types.TASK_EDIT_FAILURE, error => ({
  error,
}));
