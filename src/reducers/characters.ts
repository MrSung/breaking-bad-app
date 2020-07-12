import type { ICharacter } from '../api/types'
import { RECEIVE_DATA, ACReceiveData } from '../actions/shared'
import { FILTER_CHARACTERS, ACFilterCharacters } from '../actions/characters'

export function characters(state = [], action: ACReceiveData): ICharacter[] {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.characters
    default:
      return state
  }
}

export function filteredCharacters(
  state = [],
  action: ACFilterCharacters,
): ICharacter[] {
  switch (action.type) {
    case FILTER_CHARACTERS:
      return action.filteredCharacters
    default:
      return state
  }
}
