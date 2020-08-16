export const DATA_REQUESTED = 'DATA_REQUESTED'
export const SET_LOADING = 'SET_LOADING'
export const RECEIVE_DATA = 'RECEIVE_DATA'

export interface IFetchInitialData {
  type: typeof DATA_REQUESTED
}

export function fetchInitialData(): IFetchInitialData {
  return { type: DATA_REQUESTED }
}
