import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { GreetingLoader } from './component'

test('Loads greetings on click', async () => {
  const mockLoadGreeting = jest.fn()
  const testGreetingText = 'test greeting'
  mockLoadGreeting.mockResolvedValueOnce({
    data: { greeting: testGreetingText },
  })
  const { getByLabelText, getByText } = render(
    <GreetingLoader loadGreeting={mockLoadGreeting} />,
  )
  const nameInput = getByLabelText(/name/i)
  const loadButton = getByText(/load/i)
  // @ts-expect-error
  nameInput.value = 'Mary'
  fireEvent.click(loadButton)
  expect(mockLoadGreeting).toHaveBeenCalledWith('Mary')
  expect(mockLoadGreeting).toHaveBeenCalledTimes(1)
  await waitFor(() =>
    expect(getByLabelText(/greeting/i)).toHaveTextContent(testGreetingText),
  )
})
