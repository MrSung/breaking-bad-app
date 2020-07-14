const API_BASE_URL = 'https://www.breakingbadapi.com/api'

const fetchBreakingBadAPI = async (subUrl: string): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${subUrl}`)
    const result = await response.json()
    return result
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    console.error(`Error on Breaking Bad API: ${error}`)
  }
}

const breakingBadAPI = {
  async fetchCharacters() {
    return await fetchBreakingBadAPI('characters')
  },
  async fetchCharacter(charId: number) {
    return await fetchBreakingBadAPI(`characters/${charId}`)
  },
  async fetchEpisodes() {
    return await fetchBreakingBadAPI('episodes')
  },
  async fetchEpisode(episodeNumber: number) {
    return await fetchBreakingBadAPI(`episodes/${episodeNumber}`)
  },
  async fetchQuotes() {
    return await fetchBreakingBadAPI('quotes')
  },
  async fetchQuote(authorName: string) {
    return await fetchBreakingBadAPI(
      `quote?author=${authorName.replace(/ +/, '+')}`,
    )
  },
  async fetchDeaths() {
    return await fetchBreakingBadAPI('death-count')
  },
  async fetchDeath(characterName: string) {
    return await fetchBreakingBadAPI(
      `death-count?name=${characterName.replace(/ +/, '+')}`,
    )
  },
}

export default breakingBadAPI
