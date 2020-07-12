import type { Dispatch, Action } from 'redux'
import type { TypeCharacter } from '../api/types'
import breakingBadAPI from '../api/breakingBadAPI'

export const RECEIVE_DATA = 'RECEIVE_DATA'

interface ACReceiveData {
  type: typeof RECEIVE_DATA
  characters: TypeCharacter[]
}

function acReceiveData(characters: TypeCharacter[]): ACReceiveData {
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
