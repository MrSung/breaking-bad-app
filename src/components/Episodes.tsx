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
    <div style={{ marginTop: '3em' }}>
      <h2>A list of some episodes</h2>
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
          <section
            key={episodeId}
            style={{ marginTop: '1.5em', borderBottom: '1px dotted white' }}
          >
            <table>
              <tbody>
                <tr>
                  <td style={{ minWidth: '120px' }}>title</td>
                  <td>{title}</td>
                </tr>
                <tr>
                  <td style={{ minWidth: '120px' }}>season</td>
                  <td>{season}</td>
                </tr>
                <tr>
                  <td style={{ minWidth: '120px' }}>airDate</td>
                  <td>{airDate}</td>
                </tr>
                <tr>
                  <td style={{ minWidth: '120px' }}>characters</td>
                  <td>{characters.join(', ')}</td>
                </tr>
                <tr>
                  <td style={{ minWidth: '120px' }}>episode</td>
                  <td>{episode}</td>
                </tr>
                <tr>
                  <td style={{ minWidth: '120px' }}>series</td>
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
