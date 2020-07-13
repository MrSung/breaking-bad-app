import type { ICharacter } from '../api/types'
import { FILTER_CHARACTERS, IACFilterCharacters } from '../actions/characters'

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
