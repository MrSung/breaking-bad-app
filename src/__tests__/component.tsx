import React from 'react'
import * as api from './api'

interface IPropGreetingLoader {
  loadGreeting: () => Promise<any>
}

const GreetingLoader: React.FC<IPropGreetingLoader> = ({
  loadGreeting = api.loadGreeting,
}) => {
  const [greeting, setGreeting] = React.useState('')
  const loadGreetingForInput = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault()
    const { elements } = event.currentTarget
    // @ts-expect-error
    const { data } = await loadGreeting(elements.name.value)
    setGreeting(data.greeting)
  }

  return (
    <form onSubmit={loadGreetingForInput}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <button type="submit">Load Greeting</button>
      <div aria-label="greeting">{greeting}</div>
    </form>
  )
}

export { GreetingLoader }
