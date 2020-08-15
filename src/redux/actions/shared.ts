import type { Dispatch, Action } from 'redux'
import type { ICharacter, IEpisode, IQuote, IDeath } from '../../api/types'
import breakingBadAPI from '../../api/breakingBadAPI'

export const SET_LOADING = 'SET_LOADING'
export const RECEIVE_DATA = 'RECEIVE_DATA'

export interface IACSetLoading {
  type: typeof SET_LOADING
  isLoading: boolean
}

function acSetLoading(isLoading: boolean): IACSetLoading {
  return {
    type: SET_LOADING,
    isLoading,
  }
}

export interface IAllFetchedData {
  characters: ICharacter[]
  episodes: IEpisode[]
  quotes: IQuote[]
  deaths: IDeath[]
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
    dispatch(acSetLoading(true))
    try {
      const [characters, episodes, quotes, deaths] = await Promise.all([
        breakingBadAPI.fetchCharacters(),
        breakingBadAPI.fetchEpisodes(),
        breakingBadAPI.fetchQuotes(),
        breakingBadAPI.fetchDeaths(),
      ])
      dispatch(acSetLoading(false))
      dispatch(acReceiveData({ characters, episodes, quotes, deaths }))
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.error(`Error on Promise.all(): ${error}`)
    }
  }
}
