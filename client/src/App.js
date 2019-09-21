import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import AddPO from './pages/AddPO'
import Login from './pages/Login'

const App = _ =>
  <Router>
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/AddPO'>Add PO</Link>
      </nav>
      <Route exact path='/' component={_ => <Login />} />
      <Route exact path='/AddPO' component={_ => <AddPO />} />
      <Redirect to="/" />
    </div>
  </Router>

export default App
