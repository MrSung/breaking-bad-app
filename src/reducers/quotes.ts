import type { IQuote } from '../api/types'
import { FILTER_QUOTES, IACFilterQuotes } from '../actions/quotes'

export function filteredQuotes(state = [], action: IACFilterQuotes): IQuote[] {
  switch (action.type) {
    case FILTER_QUOTES:
      return action.filteredQuotes
    default:
      return state
  }
}
