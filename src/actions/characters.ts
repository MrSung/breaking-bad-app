import type { Dispatch, Action } from 'redux'
import type { ICharacter } from '../api/types'

export const FILTER_CHARACTERS = 'FILTER_CHARACTERS'

export interface ACFilterCharacters {
  type: typeof FILTER_CHARACTERS
  filteredCharacters: ICharacter[]
}

function acFilterCharacters(
  filteredCharacters: ICharacter[],
): ACFilterCharacters {
  return {
    type: FILTER_CHARACTERS,
    filteredCharacters,
  }
}

export function handleFilterCharacters(
  characters: ICharacter[],
  searchText: string | undefined,
  callback: VoidFunction | undefined,
) {
  return (dispatch: Dispatch<Action>) => {
    if (typeof searchText === 'undefined') return
    const filteredCharacters = characters.filter((character: ICharacter) => {
      return character.name.toLowerCase().startsWith(searchText)
    })
    dispatch(acFilterCharacters(filteredCharacters))
    if (typeof callback !== 'undefined') {
      callback()
    }
  }
}
