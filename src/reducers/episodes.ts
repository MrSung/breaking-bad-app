import type { IEpisode } from '../api/types'
import { FILTER_EPISODES, IACFilterEpisodes } from '../actions/episodes'

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
