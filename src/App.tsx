import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ padding: '2em 0 5em' }}>
        <h1 data-testid="headingOne">Breaking Bad App</h1>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
