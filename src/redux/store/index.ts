import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'
import rootReducer from '../reducers'

export type RootState = ReturnType<typeof rootReducer>

const initializeSagaMiddleware = createSagaMiddleware()

initializeSagaMiddleware.run(sagas)

export const store = createStore(
  rootReducer,
  applyMiddleware(logger, initializeSagaMiddleware),
)

export const persistor = persistStore(store)
