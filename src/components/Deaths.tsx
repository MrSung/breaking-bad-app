import React, { useState, useMemo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputSearch from './parts/InputSearch'
import type { RootState } from '../redux/store/index'
import { handleFilterDeaths } from '../redux/actions/deaths'

const Deaths: React.FC = () => {
  const [inputText, setInputText] = useState<undefined | string>('')
  const dispatch = useDispatch()
  const filteredDeaths = useSelector((state: RootState) => state.filteredDeaths)
  const deathsToShow = useMemo(() => {
    if (inputText === '') return null
    return filteredDeaths
  }, [inputText, filteredDeaths])

  useEffect(() => {
    if (typeof inputText === 'undefined' || inputText === '') return
    dispatch(handleFilterDeaths(inputText))
  }, [inputText, dispatch])

  return (
    <div style={{ marginTop: '3em' }}>
      <h2>A list of some deaths</h2>
      <InputSearch
        inputId="deathTitle"
        inputPlaceholder="Search death count name"
        onChange={(event) => {
          setInputText(event.currentTarget.value)
        }}
      />
      {deathsToShow?.map(({ name, deathCount }) => (
        <section
          key={name}
          style={{ marginTop: '1.5em', borderBottom: '1px dotted white' }}
        >
          <table>
            <tbody>
              <tr>
                <td style={{ width: '120px' }}>name</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td style={{ width: '120px' }}>deathCount</td>
                <td>{deathCount}</td>
              </tr>
            </tbody>
          </table>
        </section>
      ))}
    </div>
  )
}

export default Deaths
