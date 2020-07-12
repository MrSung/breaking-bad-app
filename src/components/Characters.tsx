import React, { useState, useMemo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { ICharacter } from '../api/types'
import type { RootState } from '../store/index'
import shuffle from '../utils/shuffle'
import { handleFilterCharacters } from '../actions/characters'

interface IPropsCharacters {
  characters: ICharacter[]
}

const Characters: React.FC<IPropsCharacters> = ({ characters }) => {
  const [charactersToShow, setCharactersToShow] = useState<null | ICharacter[]>(
    null,
  )
  const [inputText, setInputText] = useState<undefined | string>('')
  const dispatch = useDispatch()
  const filteredCharacters = useSelector(
    (state: RootState) => state.filteredCharacters,
  )
  const shuffledAndPickedCharacters = useMemo(
    () => shuffle(characters).slice(0, 6),
    [characters],
  )

  useEffect(() => {
    if (inputText !== '') {
      dispatch(
        handleFilterCharacters(characters, inputText, () => {
          setCharactersToShow(filteredCharacters)
        }),
      )
      return
    }
    setCharactersToShow(shuffledAndPickedCharacters)
    console.log('charactersToShow', charactersToShow)
    console.log('filteredCharacters', filteredCharacters)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characters, shuffledAndPickedCharacters, inputText, dispatch])

  return (
    <div>
      <h2>A list of some random characters</h2>
      <form autoComplete="off">
        <label htmlFor="charName">
          <input
            type="text"
            id="charName"
            placeholder="Search character name"
            onChange={(event) => {
              console.log(event.currentTarget.value)
              setInputText(event.currentTarget.value)
            }}
          />
        </label>
      </form>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          listStyle: 'none',
          padding: 0,
        }}
      >
        {Array.isArray(charactersToShow) &&
          charactersToShow.map(
            ({
              char_id: charId,
              img,
              name,
              nickname,
              occupation,
              appearance,
              status,
            }) => (
              <li key={charId} style={{ width: '250px', marginBottom: '18px' }}>
                <fieldset style={{ height: '100%', width: '100%' }}>
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
                    <figcaption>
                      <h3 style={{ marginBottom: '6px' }}>{name}</h3>
                      <small>{nickname}</small>
                    </figcaption>
                  </figure>
                  <hr />
                  <dl>
                    <dt>Occupation</dt>
                    <dd>{occupation}</dd>
                    <dt>Seasons</dt>
                    <dd>{appearance.join(',')}</dd>
                    <dt>Status</dt>
                    <dd>{status}</dd>
                  </dl>
                </fieldset>
              </li>
            ),
          )}
      </ul>
    </div>
  )
}

export default Characters
