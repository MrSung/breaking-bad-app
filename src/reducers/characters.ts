import type { TypeCharacter } from '../api/types'
import { RECEIVE_DATA } from '../actions/shared'
import { FILTER_CHARACTERS } from '../actions/characters'

interface TypeAction {
  type: typeof RECEIVE_DATA | typeof FILTER_CHARACTERS
  characters: TypeCharacter[]
  searchText: string
}

export default function characters(
  state = [],
  action: TypeAction,
): TypeCharacter[] {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.characters
    case FILTER_CHARACTERS:
      return state.filter((character: TypeCharacter) => {
        if (action.searchText === '') return action.characters
        return character.name.toLowerCase().startsWith(action.searchText)
      })
    default:
      return state
  }
}
