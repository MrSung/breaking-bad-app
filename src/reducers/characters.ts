import type { ICharacter } from '../api/types'
import {
  FILTER_CHARACTERS,
  IACFilterCharacters,
  ADD_CHARACTER,
  IACAddCharacter,
  REMOVE_CHARACTER,
  IACRemoveCharacter,
} from '../actions/characters'

export function filteredCharacters(
  state = [],
  action: IACFilterCharacters,
): ICharacter[] {
  switch (action.type) {
    case FILTER_CHARACTERS:
      return action.filteredCharacters
    default:
      return state
  }
}

export function registeredCharacters(
  state: ICharacter[],
  action: IACAddCharacter | IACRemoveCharacter,
): ICharacter[] {
  switch (action.type) {
    case ADD_CHARACTER:
      return [...state, action.character]
    case REMOVE_CHARACTER:
      return [...state].filter((c) => c.char_id !== action.character.char_id)
    default:
      return state
  }
}
