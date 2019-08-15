import React, { Component } from 'react';
import Test from './pages/Test'
import User from './utils/user.js'
import './App.css';
import { stringify } from 'querystring';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }

  componentWillMount() {
    User.getOne(1)
      .then(({ data }) => {
        this.setState({ users: data })
        console.log(data)
        localStorage.setItem('user', JSON.stringify(data))

      })
  }

  render() {
    return (
      <div>
        <h1>Aloha</h1>

      </div>
    )
  }
}

export default App;
