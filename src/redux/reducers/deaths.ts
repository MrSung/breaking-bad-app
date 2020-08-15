import type { IDeath } from '../../api/types'
import { FILTER_DEATHS, IACFilterDeaths } from '../actions/deaths'

export function filteredDeaths(
  state: IDeath[] = [],
  action: IACFilterDeaths,
): IDeath[] {
  switch (action.type) {
    case FILTER_DEATHS:
      return action.filteredDeaths
    default:
      return state
  }
}
