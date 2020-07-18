import React, { useMemo } from 'react'
import type { IQuote } from '../api/types'
import shuffle from '../utils/shuffle'

interface IPropsQuotes {
  quotes: IQuote[]
}

const Quotes: React.FC<IPropsQuotes> = ({ quotes }) => {
  const quotesToShow = useMemo(() => shuffle(quotes).slice(0, 10), [quotes])

  return (
    <div style={{ marginTop: '3em' }}>
      <h2>A list of some quotes</h2>
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
