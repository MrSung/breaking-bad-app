import * as React from 'react'
import { render } from './test-utils'
import App from './App'

describe('Breaking Bad App', () => {
  describe('test stuff in the DOM', () => {
    test('renders h1 title Breaking Bad App', () => {
      const { getByTestId } = render(<App />)
      const headingOne = getByTestId('headingOne')
      expect(headingOne).toBeInTheDocument()
      expect(headingOne).toHaveTextContent('Breaking Bad App')
    })
  })
})

// test('renders learn react link', () => {
//   const { getByText } = render(<App />)
//   const linkElement = getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// })
