import breakingBadAPI from '../api/breakingBadAPI'

export const RECEIVE_DATA = 'RECEIVE_DATA'

function receiveData(characters: any): any {
  return {
    type: RECEIVE_DATA,
    characters,
  }
}

export function handleInitialData() {
  return async (dispatch: any) => {
    const [characters] = await Promise.all([breakingBadAPI.fetchCharacters()])
    dispatch(receiveData(characters))
  }
}
