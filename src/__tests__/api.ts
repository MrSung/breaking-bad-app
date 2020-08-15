const sleep = async (time: number): Promise<void> =>
  await new Promise((resolve) => {
    setTimeout(resolve, time)
  })

const greetings = ['Hello', 'Hi', 'Hey there', "What's up", 'Howdy', "G'day"]

async function fetchRandomGreeting(): Promise<string> {
  await sleep(1000)
  return greetings[Math.floor(Math.random() * greetings.length)]
}

interface IReturnValLoadGreeting {
  data: {
    greeting: string
  }
}

async function loadGreeting(subject: string): Promise<IReturnValLoadGreeting> {
  return { data: { greeting: `${await fetchRandomGreeting()} ${subject}` } }
}

export { loadGreeting }
