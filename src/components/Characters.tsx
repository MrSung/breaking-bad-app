import React, { useState, useMemo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputSearch from './parts/InputSearch'
import ButtonToggle from './parts/ButtonToggle'
import type { ICharacter } from '../api/types'
import type { RootState } from '../redux/store/index'
import shuffle from '../utils/shuffle'
import {
  handleFilterCharacters,
  handleAddCharacter,
  handleRemoveCharacter,
} from '../redux/actions/characters'

interface IPropsCharacters {
  characters: ICharacter[]
}

const Characters: React.FC<IPropsCharacters> = ({ characters }) => {
  const [inputText, setInputText] = useState<undefined | string>('')
  const dispatch = useDispatch()
  const filteredCharacters = useSelector(
    (state: RootState) => state.filteredCharacters,
  )
  const registeredCharacters = useSelector(
    (state: RootState) => state.registeredCharacters,
  )
  const shuffledAndPickedCharacters = useMemo(
    () => shuffle(characters).slice(0, 3),
    [characters],
  )
  const charactersToShow = useMemo(() => {
    return inputText === '' ? shuffledAndPickedCharacters : filteredCharacters
  }, [inputText, shuffledAndPickedCharacters, filteredCharacters])

  useEffect(() => {
    if (typeof inputText === 'undefined' || inputText === '') return
    dispatch(handleFilterCharacters(characters, inputText))
  }, [characters, inputText, dispatch])

  return (
    <div>
      <h2>A list of some random characters</h2>
      <InputSearch
        inputId="characterName"
        inputPlaceholder="Search character name"
        onChange={(event) => {
          setInputText(event.currentTarget.value)
        }}
      />
      {charactersToShow.length === 0 && (
        <div style={{ margin: 0 }}>No results matched.</div>
      )}
      {charactersToShow.length !== 0 && (
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {charactersToShow.map((character) => {
            const {
              char_id: charId,
              img,
              name,
              nickname,
              occupation,
              appearance,
              status,
            } = character
            const containsMatchedCharacter = registeredCharacters.some(
              (c) => c.char_id === charId,
            )
            return (
              <li
                key={charId}
                style={{
                  width: '250px',
                  marginBottom: '18px',
                  border: '1px solid white',
                }}
              >
                <figure style={{ margin: 0, position: 'relative' }}>
                  <img
                    src={img}
                    alt={name}
                    height="300"
                    style={{
                      objectFit: 'cover',
                      overflow: 'hidden',
                      width: '100%',
                    }}
                  />
                  <figcaption style={{ padding: '0 1em 1em' }}>
                    <h3 style={{ marginBottom: '6px' }}>{name}</h3>
                    <small>{nickname}</small>
                  </figcaption>
                </figure>
                <hr />
                <dl style={{ padding: '0 1em' }}>
                  <dt>Occupation</dt>
                  <dd>{occupation}</dd>
                  <dt>Seasons</dt>
                  <dd>{appearance.join(',')}</dd>
                  <dt>Status</dt>
                  <dd>{status}</dd>
                </dl>
                <hr />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <ButtonToggle
                    onClick={() => {
                      if (!containsMatchedCharacter) {
                        dispatch(handleAddCharacter(character))
                        return
                      }
                      dispatch(handleRemoveCharacter(character))
                    }}
                    added={containsMatchedCharacter}
                  />
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Characters
