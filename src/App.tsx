import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from './store'
import { handleInitialData } from './actions/shared'
import Characters from './components/Characters'
import Episodes from './components/Episodes'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const { characters, episodes } = useSelector(
    (state: RootState) => state.allFetchedData,
  )

  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  return (
    <div>
      <Characters characters={characters} />
      <Episodes episodes={episodes} />
    </div>
  )
}

export default App
