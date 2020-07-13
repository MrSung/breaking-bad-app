import type { Dispatch, Action } from 'redux'
import type { ICharacter } from '../api/types'
import breakingBadAPI from '../api/breakingBadAPI'

export const RECEIVE_DATA = 'RECEIVE_DATA'

export interface IAllFetchedData {
  characters: ICharacter[]
}

export interface IACReceiveData {
  type: typeof RECEIVE_DATA
  allFetchedData: IAllFetchedData
}

function acReceiveData(allFetchedData: IAllFetchedData): IACReceiveData {
  return {
    type: RECEIVE_DATA,
    allFetchedData,
  }
}

export function handleInitialData() {
  return async (dispatch: Dispatch<Action>) => {
    const [characters] = await Promise.all([breakingBadAPI.fetchCharacters()])
    dispatch(acReceiveData({ characters }))
  }
}
