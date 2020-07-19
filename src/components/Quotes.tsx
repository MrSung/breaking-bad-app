import React, { useState, useMemo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputSearch from './parts/InputSearch'
import type { IQuote } from '../api/types'
import type { RootState } from '../store/index'
import shuffle from '../utils/shuffle'
import { handleFilterQuotes } from '../actions/quotes'

interface IPropsQuotes {
  quotes: IQuote[]
}

const Quotes: React.FC<IPropsQuotes> = ({ quotes }) => {
  const [inputText, setInputText] = useState<undefined | string>('')
  const dispatch = useDispatch()
  const filteredQuotes = useSelector((state: RootState) => state.filteredQuotes)
  const shuffledAndPickedQuotes = useMemo(() => shuffle(quotes).slice(0, 10), [
    quotes,
  ])
  const quotesToShow = useMemo(() => {
    return inputText === '' ? shuffledAndPickedQuotes : filteredQuotes
  }, [inputText, shuffledAndPickedQuotes, filteredQuotes])

  useEffect(() => {
    if (typeof inputText === 'undefined' || inputText === '') return
    dispatch(handleFilterQuotes(quotes, inputText))
  }, [quotes, inputText, dispatch])

  return (
    <div style={{ marginTop: '3em' }}>
      <h2>A list of some quotes</h2>
      <InputSearch
        inputId="quoteContent"
        inputPlaceholder="Search quote"
        onChange={(event) => {
          setInputText(event.currentTarget.value)
        }}
      />
      {quotesToShow.map(({ quote_id: quoteId, quote, author, series }) => (
        <section
          key={quoteId}
          style={{ marginTop: '1.5em', borderBottom: '1px dotted white' }}
        >
          <table>
            <tbody>
              <tr>
                <td>quote</td>
                <td style={{ width: '660px' }}>{quote}</td>
              </tr>
              <tr>
                <td>author</td>
                <td style={{ width: '640px' }}>{author}</td>
              </tr>
              <tr>
                <td>series</td>
                <td style={{ width: '640px' }}>{series}</td>
              </tr>
            </tbody>
          </table>
        </section>
      ))}
    </div>
  )
}

export default Quotes
