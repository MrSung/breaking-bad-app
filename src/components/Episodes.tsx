import React, { useState, useMemo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputSearch from './parts/InputSearch'
import type { IEpisode } from '../api/types'
import type { RootState } from '../store/index'
import shuffle from '../utils/shuffle'
import { handleFilterEpisodes } from '../actions/episodes'

interface IPropsEpisodes {
  episodes: IEpisode[]
}

const Episodes: React.FC<IPropsEpisodes> = ({ episodes }) => {
  const [inputText, setInputText] = useState<undefined | string>('')
  const dispatch = useDispatch()
  const filteredEpisodes = useSelector(
    (state: RootState) => state.filteredEpisodes,
  )
  const shuffledAndPickedEpisodes = useMemo(
    () => shuffle(episodes).slice(0, 3),
    [episodes],
  )
  const episodesToShow = useMemo(() => {
    return inputText === '' ? shuffledAndPickedEpisodes : filteredEpisodes
  }, [inputText, shuffledAndPickedEpisodes, filteredEpisodes])

  useEffect(() => {
    if (typeof inputText === 'undefined' || inputText === '') return
    dispatch(handleFilterEpisodes(episodes, inputText))
  }, [episodes, inputText, dispatch])

  return (
    <div style={{ marginTop: '3em' }}>
      <h2>A list of some episodes</h2>
      <InputSearch
        inputId="episodeTitle"
        inputPlaceholder="Search episode name"
        onChange={(event) => {
          setInputText(event.currentTarget.value)
        }}
      />
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
