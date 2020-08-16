import { call, put } from 'redux-saga/effects'
import { SET_LOADING, RECEIVE_DATA } from '../actions/shared'
import breakingBadAPI from '../../api/breakingBadAPI'

export default function* workerSagaFetchInitialData(): Generator<any> {
  yield call(fetchInitialData)
}

function* fetchInitialData(): Generator<any> {
  yield put({ type: SET_LOADING, isLoading: true })
  try {
    // @ts-expect-error
    const [characters, episodes, quotes, deaths] = yield Promise.all([
      breakingBadAPI.fetchCharacters(),
      breakingBadAPI.fetchEpisodes(),
      breakingBadAPI.fetchQuotes(),
      breakingBadAPI.fetchDeaths(),
    ])
    yield put({ type: SET_LOADING, isLoading: false })
    yield put({
      type: RECEIVE_DATA,
      allFetchedData: { characters, episodes, quotes, deaths },
    })
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    console.error(`Error on Promise.all(): ${error}`)
  }
}
