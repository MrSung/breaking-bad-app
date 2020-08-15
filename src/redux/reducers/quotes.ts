import type { IQuote } from '../../api/types'
import {
  FILTER_QUOTES,
  IACFilterQuotes,
  ADD_QUOTE,
  IACAddQuote,
  REMOVE_QUOTE,
  IACRemoveQuote,
} from '../actions/quotes'

export function filteredQuotes(
  state: IQuote[] = [],
  action: IACFilterQuotes,
): IQuote[] {
  switch (action.type) {
    case FILTER_QUOTES:
      return action.filteredQuotes
    default:
      return state
  }
}

export function registeredQuotes(
  state: IQuote[] = [],
  action: IACAddQuote | IACRemoveQuote,
): IQuote[] {
  switch (action.type) {
    case ADD_QUOTE:
      return [...state, action.quote]
    case REMOVE_QUOTE:
      return [...state].filter((q) => q.quote_id !== action.quote.quote_id)
    default:
      return state
  }
}
