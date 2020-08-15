import type { Dispatch, Action } from 'redux'
import type { ICharacter } from '../../api/types'

export const FILTER_CHARACTERS = 'FILTER_CHARACTERS'
export const ADD_CHARACTER = 'ADD_CHARACTER'
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER'

export interface IACFilterCharacters {
  type: typeof FILTER_CHARACTERS
  filteredCharacters: ICharacter[]
}

export interface IACAddCharacter {
  type: typeof ADD_CHARACTER
  character: ICharacter
}

export interface IACRemoveCharacter {
  type: typeof REMOVE_CHARACTER
  character: ICharacter
}

function acFilterCharacters(
  filteredCharacters: ICharacter[],
): IACFilterCharacters {
  return {
    type: FILTER_CHARACTERS,
    filteredCharacters,
  }
}

function acAddCharacter(character: ICharacter): IACAddCharacter {
  return {
    type: ADD_CHARACTER,
    character,
  }
}

function acRemoveCharacter(character: ICharacter): IACRemoveCharacter {
  return {
    type: REMOVE_CHARACTER,
    character,
  }
}

export function handleFilterCharacters(
  characters: ICharacter[],
  searchText: string,
  callback?: VoidFunction,
) {
  return (dispatch: Dispatch<Action>) => {
    if (typeof searchText === 'undefined') return
    const filteredCharacters = characters.filter(({ name }: ICharacter) => {
      return name.toLowerCase().startsWith(searchText)
    })
    dispatch(acFilterCharacters(filteredCharacters))
    if (typeof callback !== 'undefined') {
      callback()
    }
  }
}

export function handleAddCharacter(
  character: ICharacter,
  callback?: VoidFunction,
) {
  return (dispatch: Dispatch<Action>) => {
    dispatch(acAddCharacter(character))
    if (typeof callback !== 'undefined') {
      callback()
    }
  }
}

export function handleRemoveCharacter(
  character: ICharacter,
  callback?: VoidFunction,
) {
  return (dispatch: Dispatch<Action>) => {
    dispatch(acRemoveCharacter(character))
    if (typeof callback !== 'undefined') {
      callback()
    }
  }
}
