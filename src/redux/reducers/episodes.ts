import type { IEpisode } from '../../api/types'
import {
  FILTER_EPISODES,
  IACFilterEpisodes,
  ADD_EPISODE,
  IACAddEpisode,
  REMOVE_EPISODE,
  IACRemoveEpisode,
} from '../actions/episodes'

export function filteredEpisodes(
  state: IEpisode[] = [],
  action: IACFilterEpisodes,
): IEpisode[] {
  switch (action.type) {
    case FILTER_EPISODES:
      return action.filteredEpisodes
    default:
      return state
  }
}

export function registeredEpisodes(
  state: IEpisode[] = [],
  action: IACAddEpisode | IACRemoveEpisode,
): IEpisode[] {
  switch (action.type) {
    case ADD_EPISODE:
      return [...state, action.episode]
    case REMOVE_EPISODE:
      return [...state].filter(
        (ep) => ep.episode_id !== action.episode.episode_id,
      )
    default:
      return state
  }
}
