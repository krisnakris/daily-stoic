import './App.css';
// import React from 'react';
import QuoteList from './components/QuoteList';
// import QuoteForm from './components/QuoteForm';
// import swal from 'sweetalert';
import useFetch from './helpers/useFetch';
// import FilterQuotes from './components/FilterQuotes.jsx';
import { useState } from 'react';
import Home from './components/Home'
import Detail from './components/DetailQuotes'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App () {

  return (
 
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/detail/:id'>
            <Detail />
          </Route>
        </Switch>
      </div>
    </Router>
  )
  
}

export default App;
