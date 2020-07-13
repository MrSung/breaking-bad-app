import { combineReducers } from 'redux'
import {
  RECEIVE_DATA,
  IAllFetchedData,
  IACReceiveData,
} from '../actions/shared'
import { filteredCharacters } from './characters'

export function allFetchedData(
  state = { characters: [] },
  action: IACReceiveData,
): IAllFetchedData {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.allFetchedData
    default:
      return state
  }
}

const rootReducer = combineReducers({ allFetchedData, filteredCharacters })

export default rootReducer
