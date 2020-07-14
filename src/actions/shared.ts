import type { Dispatch, Action } from 'redux'
import type { ICharacter, IEpisodes, IQuotes, IDeaths } from '../api/types'
import breakingBadAPI from '../api/breakingBadAPI'

export const RECEIVE_DATA = 'RECEIVE_DATA'

export interface IAllFetchedData {
  characters: ICharacter[]
  episodes: IEpisodes[]
  quotes: IQuotes[]
  deaths: IDeaths[]
}

export interface IACReceiveData {
  type: typeof RECEIVE_DATA
  allFetchedData: IAllFetchedData
}

function acReceiveData(allFetchedData: IAllFetchedData): IACReceiveData {
  return {
    type: RECEIVE_DATA,
    allFetchedData,
  }
}

export function handleInitialData() {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const [characters, episodes, quotes, deaths] = await Promise.all([
        breakingBadAPI.fetchCharacters(),
        breakingBadAPI.fetchEpisodes(),
        breakingBadAPI.fetchQuotes(),
        breakingBadAPI.fetchDeaths(),
      ])
      dispatch(acReceiveData({ characters, episodes, quotes, deaths }))
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.error(`Error on Promise.all(): ${error}`)
    }
  }
}
