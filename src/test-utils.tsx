import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './store/index'

const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <React.StrictMode>{children}</React.StrictMode>
    </Provider>
  )
}

const customRender = (ui: any, options?: any): any =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
