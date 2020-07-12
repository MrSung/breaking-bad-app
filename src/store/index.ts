import { createStore } from 'redux'
import rootReducer from '../reducers'
import middleware from '../middleware'

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, middleware)
