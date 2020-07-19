import type { Dispatch, Action } from 'redux'
import type { IQuote } from '../api/types'

export const FILTER_QUOTES = 'FILTER_QUOTES'

export interface IACFilterQuotes {
  type: typeof FILTER_QUOTES
  filteredQuotes: IQuote[]
}

function acFilterQuotes(filteredQuotes: IQuote[]): IACFilterQuotes {
  return {
    type: FILTER_QUOTES,
    filteredQuotes,
  }
}

export function handleFilterQuotes(
  quotes: IQuote[],
  searchText: string,
  callback?: VoidFunction,
) {
  return (dispatch: Dispatch<Action>) => {
    if (typeof searchText === 'undefined') return
    const filteredQuotes = quotes.filter((quote: IQuote) => {
      return quote.quote.toLowerCase().startsWith(searchText)
    })
    dispatch(acFilterQuotes(filteredQuotes))
    if (typeof callback !== 'undefined') {
      callback()
    }
  }
}
