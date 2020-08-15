import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import { handleInitialData } from '../redux/actions/shared'
import Characters from '../components/Characters'
import Episodes from '../components/Episodes'
import Quotes from '../components/Quotes'
// import Deaths from './components/Deaths'

const Homepage: React.FC = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state: RootState) => state.isLoading)
  const { characters, episodes, quotes } = useSelector(
    (state: RootState) => state.allFetchedData,
  )

  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  return (
    <>
      {(() => {
        if (isLoading)
          return <h2 data-testid="headingNowLoading">Now loading...</h2>
        return (
          <>
            <Characters characters={characters} />
            <Episodes episodes={episodes} />
            <Quotes quotes={quotes} />
            {/* <Deaths /> */}
          </>
        )
      })()}
    </>
  )
}

export default Homepage
