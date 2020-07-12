import type { Dispatch, Action } from 'redux'
import type { ICharacter } from '../api/types'
import breakingBadAPI from '../api/breakingBadAPI'

export const RECEIVE_DATA = 'RECEIVE_DATA'

export interface ACReceiveData {
  type: typeof RECEIVE_DATA
  characters: ICharacter[]
}

function acReceiveData(characters: ICharacter[]): ACReceiveData {
  return {
    type: RECEIVE_DATA,
    characters,
  }
}

export function handleInitialData() {
  return async (dispatch: Dispatch<Action>) => {
    const [characters] = await Promise.all([breakingBadAPI.fetchCharacters()])
    dispatch(acReceiveData(characters))
  }
}
