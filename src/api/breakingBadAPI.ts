const API_BASE_URL = 'https://www.breakingbadapi.com/api'

const fetchBreakingBadAPI = async (subUrl: string): Promise<any> => {
  const response = await fetch(`${API_BASE_URL}/${subUrl}`)
  const result = await response.json()
  return result
}

const breakingBadAPI = {
  async fetchCharacters() {
    return await fetchBreakingBadAPI('characters')
  },
  async fetchCharacter(charId: number) {
    return await fetchBreakingBadAPI(`characters/${charId}`)
  },
}

export default breakingBadAPI
