import React from 'react'
import { useDispatch } from 'react-redux'
import type { TypeCharacters } from '../api/types'
import shuffle from '../utils/shuffle'
import { handleFilterCharacters } from '../actions/characters'

interface IPropsCharacters {
  characters: TypeCharacters
}

const Characters: React.FC<IPropsCharacters> = ({ characters }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <h2>A list of some random characters</h2>
      <label htmlFor="charName">
        <input
          type="text"
          id="charName"
          placeholder="Search character name"
          onKeyUp={(event) => {
            dispatch(handleFilterCharacters(event.currentTarget.value))
          }}
        />
      </label>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          listStyle: 'none',
          padding: 0,
        }}
      >
        {shuffle(characters)
          .slice(0, 6)
          .map(
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
