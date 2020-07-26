import React, { useState, useMemo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputSearch from './parts/InputSearch'
import ButtonToggle from './parts/ButtonToggle'
import type { IQuote } from '../api/types'
import type { RootState } from '../store/index'
import shuffle from '../utils/shuffle'
import {
  handleFilterQuotes,
  handleAddQuote,
  handleRemoveQuote,
} from '../actions/quotes'

interface IPropsQuotes {
  quotes: IQuote[]
}

const Quotes: React.FC<IPropsQuotes> = ({ quotes }) => {
  const [inputText, setInputText] = useState<undefined | string>('')
  const dispatch = useDispatch()
  const filteredQuotes = useSelector((state: RootState) => state.filteredQuotes)
  const registeredQuotes = useSelector(
    (state: RootState) => state.registeredQuotes,
  )
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
      <h2>A list of some random quotes</h2>
      <InputSearch
        inputId="quoteContent"
        inputPlaceholder="Search quote"
        onChange={(event) => {
          setInputText(event.currentTarget.value)
        }}
      />
      {quotesToShow.length === 0 && (
        <div style={{ margin: 0 }}>No results matched.</div>
      )}
      {quotesToShow.length !== 0 &&
        quotesToShow.map((quoteSingle) => {
          const { quote_id: quoteId, quote, author, series } = quoteSingle
          const containsMatchedQuote = registeredQuotes.some(
            (q) => q.quote_id === quoteId,
          )
          return (
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
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingBottom: '0.3em',
                }}
              >
                <ButtonToggle
                  onClick={() => {
                    if (!containsMatchedQuote) {
                      dispatch(handleAddQuote(quoteSingle))
                      return
                    }
                    dispatch(handleRemoveQuote(quoteSingle))
                  }}
                  added={containsMatchedQuote}
                />
              </div>
            </section>
          )
        })}
    </div>
  )
}

export default Quotes
