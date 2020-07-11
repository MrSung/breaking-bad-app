import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { handleInitialData } from './actions/shared'
import Characters from './components/Characters'

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  return (
    <div>
      <Characters />
    </div>
  )
}

export default App
