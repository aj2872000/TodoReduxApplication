// src/actions/sagas.js

import { put, takeEvery } from 'redux-saga/effects';
import { Types } from './todos';

function* addTodoAsync(action) {
  yield put({ type: Types.ADD_TODO, text: action.text });
}

function* watchAddTodoAsync() {
  yield takeEvery(Types.ADD_TODO_ASYNC, addTodoAsync);
}

export default watchAddTodoAsync;
