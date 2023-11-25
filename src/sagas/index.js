// src/sagas/index.js

import { all } from 'redux-saga/effects';
import watchAddTodo from '../actions/sagas';

export default function* rootSaga() {
  yield all([watchAddTodo()]);
}
