import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Form from './Form'
import {BrowserRouter as Router, Route} from 'react-router-dom'


class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:3001/fields').then(resp => {
      console.log(resp.data)
    })
  }
  render() {
    return (
      <Router>
      <div>

        <div>
        <Route exact path="/" component={Form} />
        </div>

      </div>
      </Router>
    );
  }
}

export default App
