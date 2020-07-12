import { combineReducers } from 'redux'
import { characters, filteredCharacters } from './characters'

const rootReducer = combineReducers({ characters, filteredCharacters })

export default rootReducer
