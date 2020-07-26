import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
  RECEIVE_DATA,
  IACReceiveData,
  IAllFetchedData,
} from '../actions/shared'
import { isLoading } from './loading'
import { filteredCharacters, registeredCharacters } from './characters'
import { filteredEpisodes, registeredEpisodes } from './episodes'
import { filteredQuotes, registeredQuotes } from './quotes'
import { filteredDeaths } from './deaths'

export function allFetchedData(
  state = { characters: [], episodes: [], quotes: [], deaths: [] },
  action: IACReceiveData,
): IAllFetchedData {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.allFetchedData
    default:
      return state
  }
}

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  isLoading,
  allFetchedData,
  filteredCharacters,
  filteredEpisodes,
  filteredQuotes,
  filteredDeaths,
  registeredCharacters,
  registeredEpisodes,
  registeredQuotes,
})

export default persistReducer(persistConfig, rootReducer)
