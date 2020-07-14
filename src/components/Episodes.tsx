import React, { useMemo } from 'react'
import type { IEpisodes } from '../api/types'
import shuffle from '../utils/shuffle'

interface IPropsEpisodes {
  episodes: IEpisodes[]
}

const Episodes: React.FC<IPropsEpisodes> = ({ episodes }) => {
  const episodesToShow = useMemo(() => shuffle(episodes).slice(0, 3), [
    episodes,
  ])

  return (
    <div>
      {episodesToShow.map(
        ({
          episode_id: episodeId,
          title,
          season,
          air_date: airDate,
          characters,
          episode,
          series,
        }) => (
          <section key={episodeId} style={{ marginTop: '1.5em' }}>
            <table>
              <tbody>
                <tr>
                  <td>title</td>
                  <td>{title}</td>
                </tr>
                <tr>
                  <td>season</td>
                  <td>{season}</td>
                </tr>
                <tr>
                  <td>airDate</td>
                  <td>{airDate}</td>
                </tr>
                <tr>
                  <td>characters</td>
                  <td>{characters.join(', ')}</td>
                </tr>
                <tr>
                  <td>episode</td>
                  <td>{episode}</td>
                </tr>
                <tr>
                  <td>series</td>
                  <td>{series}</td>
                </tr>
              </tbody>
            </table>
          </section>
        ),
      )}
    </div>
  )
}

export default Episodes
