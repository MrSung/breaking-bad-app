import { combineReducers } from 'redux'
import {
  RECEIVE_DATA,
  IAllFetchedData,
  IACReceiveData,
} from '../actions/shared'
import { filteredCharacters } from './characters'
import { filteredEpisodes } from './episodes'
import { filteredQuotes } from './quotes'

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
  allFetchedData,
  filteredCharacters,
  filteredEpisodes,
  filteredQuotes,
})

export default rootReducer
