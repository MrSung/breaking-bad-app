import type { Dispatch, Action } from 'redux'
import type { IDeath } from '../../api/types'
import breakingBadAPI from '../../api/breakingBadAPI'

export const FILTER_DEATHS = 'FILTER_DEATHS'

export interface IACFilterDeaths {
  type: typeof FILTER_DEATHS
  filteredDeaths: IDeath[]
}

function acFilterDeaths(filteredDeaths: IDeath[]): IACFilterDeaths {
  return {
    type: FILTER_DEATHS,
    filteredDeaths,
  }
}

export function handleFilterDeaths(
  searchText: string,
  callback?: VoidFunction,
) {
  return async (dispatch: Dispatch<Action>) => {
    if (typeof searchText === 'undefined') return
    const filteredDeaths = await breakingBadAPI.fetchDeath(
      searchText.toLowerCase().replace(/ +/, ' '),
    )
    dispatch(acFilterDeaths(filteredDeaths))
    if (typeof callback !== 'undefined') {
      callback()
    }
  }
}
