import type { Dispatch, Action } from 'redux'

export const FILTER_CHARACTERS = 'FILTER_CHARACTERS'

interface ACFilterCharacters {
  type: typeof FILTER_CHARACTERS
  searchText: string
}

function acFilterCharacters(searchText: string): ACFilterCharacters {
  return {
    type: FILTER_CHARACTERS,
    searchText,
  }
}

export function handleFilterCharacters(searchText: string) {
  return (dispatch: Dispatch<Action>) => {
    dispatch(acFilterCharacters(searchText))
  }
}
