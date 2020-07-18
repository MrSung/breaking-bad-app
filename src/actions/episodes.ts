import type { Dispatch, Action } from 'redux'
import type { IEpisode } from '../api/types'

export const FILTER_EPISODES = 'FILTER_EPISODES'

export interface IACFilterEpisodes {
  type: typeof FILTER_EPISODES
  filteredEpisodes: IEpisode[]
}

function acFilterEpisodes(filteredEpisodes: IEpisode[]): IACFilterEpisodes {
  return {
    type: FILTER_EPISODES,
    filteredEpisodes,
  }
}

export function handleFilterEpisodes(
  episodes: IEpisode[],
  searchText: string,
  callback?: VoidFunction,
) {
  return (dispatch: Dispatch<Action>) => {
    if (typeof searchText === 'undefined') return
    const filteredEpisodes = episodes.filter((episode: IEpisode) => {
      return episode.title.toLowerCase().startsWith(searchText)
    })
    dispatch(acFilterEpisodes(filteredEpisodes))
    if (typeof callback !== 'undefined') {
      callback()
    }
  }
}
