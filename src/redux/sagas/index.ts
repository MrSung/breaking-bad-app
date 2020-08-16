import { takeEvery } from 'redux-saga/effects'
import { DATA_REQUESTED } from '../actions/shared'
import workerSagaFetchInitialData from './shared'

export default function* watcherSagas(): Generator<any> {
  yield takeEvery(DATA_REQUESTED, workerSagaFetchInitialData)
}
