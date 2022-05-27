import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import About from './About'
import Detailnews from './Detailnews'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css'

ReactDOM.render((
  <Router>
    <Route exact path="/" component={App}/>
    <Route path="/Detailnews" component={Detailnews}/>
    <Route path="/About" component={About} />
  </Router>
), document.getElementById('root'))
