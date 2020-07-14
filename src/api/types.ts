export interface ICharacter {
  char_id: number
  name: string
  birthday: string
  occupation: string[]
  img: string
  status: string
  nickname: string
  appearance: number[]
  portrayed: string
  category: string
  better_call_saul_appearance: number[]
}

export interface IEpisodes {
  episode_id: number
  title: string
  season: string
  air_date: string
  characters: string[]
  episode: string
  series: string
}

export interface IQuotes {
  quote_id: number
  quote: string
  author: string
  series: string
}

export interface IDeaths {
  deathCount: number
}
