import { RECEIVE_DATA } from '../actions/shared'

export default function characters(state = [], action: any): any {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.characters
    default:
      return state
  }
}
