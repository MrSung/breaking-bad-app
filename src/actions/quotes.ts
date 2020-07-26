import type { Dispatch, Action } from 'redux'
import type { IQuote } from '../api/types'

export const FILTER_QUOTES = 'FILTER_QUOTES'
export const ADD_QUOTE = 'ADD_QUOTE'
export const REMOVE_QUOTE = 'REMOVE_QUOTE'

export interface IACFilterQuotes {
  type: typeof FILTER_QUOTES
  filteredQuotes: IQuote[]
}

export interface IACAddQuote {
  type: typeof ADD_QUOTE
  quote: IQuote
}

export interface IACRemoveQuote {
  type: typeof REMOVE_QUOTE
  quote: IQuote
}

function acFilterQuotes(filteredQuotes: IQuote[]): IACFilterQuotes {
  return {
    type: FILTER_QUOTES,
    filteredQuotes,
  }
}

function acAddQuote(quote: IQuote): IACAddQuote {
  return {
    type: ADD_QUOTE,
    quote,
  }
}

function acRemoveQuote(quote: IQuote): IACRemoveQuote {
  return {
    type: REMOVE_QUOTE,
    quote,
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

export function handleAddQuote(quote: IQuote, callback?: VoidFunction) {
  return (dispatch: Dispatch<Action>) => {
    dispatch(acAddQuote(quote))
    if (typeof callback !== 'undefined') {
      callback()
    }
  }
}

export function handleRemoveQuote(quote: IQuote, callback?: VoidFunction) {
  return (dispatch: Dispatch<Action>) => {
    dispatch(acRemoveQuote(quote))
    if (typeof callback !== 'undefined') {
      callback()
    }
  }
}
