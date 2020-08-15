import { createStore } from 'redux'
import { persistStore } from 'redux-persist'
import rootReducer from '../reducers'
import middleware from '../middleware'

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, middleware)

// @ts-expect-error
export const persistor = persistStore(store)
