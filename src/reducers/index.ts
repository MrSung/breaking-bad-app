import { combineReducers } from 'redux'
import {
  RECEIVE_DATA,
  IACReceiveData,
  IAllFetchedData,
} from '../actions/shared'
import { isLoading } from './loading'
import { filteredCharacters, registeredCharacters } from './characters'
import { filteredEpisodes, registeredEpisodes } from './episodes'
import { filteredQuotes } from './quotes'
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

const rootReducer = combineReducers({
  isLoading,
  allFetchedData,
  filteredCharacters,
  filteredEpisodes,
  filteredQuotes,
  filteredDeaths,
  registeredCharacters,
  registeredEpisodes,
})

export default rootReducer
