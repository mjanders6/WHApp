import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AddPO from './pages/AddPO'

const App = _ =>
  <Router>
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/AddPO'>Add PO</Link>
      </nav>
      <Route exact path='/AddPO' component={_ => <AddPO />} />
    </div>
  </Router>

export default App
