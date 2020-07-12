import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { applyMiddleware } from 'redux'

const middleware = applyMiddleware(thunk, logger)

export default middleware
