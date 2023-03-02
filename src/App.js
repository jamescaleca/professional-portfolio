import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import './styles.css'

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/contact'><Contact /></Route>
        <Route exact path='/linkedin' component={() => {
          window.location.href = 'https://www.linkedin.com/in/james-caleca/'
          return null
        }} />
        <Route exact path='/github' component={() => {
          window.location.href = 'https://github.com/jamescaleca'
          return null
        }} />
      </Switch>
    </>
  )
}

export default App