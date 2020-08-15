import type { Dispatch, Action } from 'redux'
import type { IEpisode } from '../../api/types'

export const FILTER_EPISODES = 'FILTER_EPISODES'
export const ADD_EPISODE = 'ADD_EPISODE'
export const REMOVE_EPISODE = 'REMOVE_EPISODE'

export interface IACFilterEpisodes {
  type: typeof FILTER_EPISODES
  filteredEpisodes: IEpisode[]
}

export interface IACAddEpisode {
  type: typeof ADD_EPISODE
  episode: IEpisode
}

export interface IACRemoveEpisode {
  type: typeof REMOVE_EPISODE
  episode: IEpisode
}

function acFilterEpisodes(filteredEpisodes: IEpisode[]): IACFilterEpisodes {
  return {
    type: FILTER_EPISODES,
    filteredEpisodes,
  }
}

function acAddEpisode(episode: IEpisode): IACAddEpisode {
  return {
    type: ADD_EPISODE,
    episode,
  }
}

function acRemoveEpisode(episode: IEpisode): IACRemoveEpisode {
  return {
    type: REMOVE_EPISODE,
    episode,
  }
}

export function handleFilterEpisodes(
  episodes: IEpisode[],
  searchText: string,
  callback?: VoidFunction,
) {
  return (dispatch: Dispatch<Action>) => {
    if (typeof searchText === 'undefined') return
    const filteredEpisodes = episodes.filter(({ title }: IEpisode) => {
      return title.toLowerCase().startsWith(searchText)
    })
    dispatch(acFilterEpisodes(filteredEpisodes))
    if (typeof callback !== 'undefined') {
      callback()
    }
  }
}

export function handleAddEpisode(episode: IEpisode, callback?: VoidFunction) {
  return (dispatch: Dispatch<Action>) => {
    dispatch(acAddEpisode(episode))
    if (typeof callback !== 'undefined') {
      callback()
    }
  }
}

export function handleRemoveEpisode(
  episode: IEpisode,
  callback?: VoidFunction,
) {
  return (dispatch: Dispatch<Action>) => {
    dispatch(acRemoveEpisode(episode))
    if (typeof callback !== 'undefined') {
      callback()
    }
  }
}
