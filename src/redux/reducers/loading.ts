import { SET_LOADING, IACSetLoading } from '../actions/shared'

export function isLoading(state = true, action: IACSetLoading): boolean {
  switch (action.type) {
    case SET_LOADING:
      return action.isLoading
    default:
      return state
  }
}
