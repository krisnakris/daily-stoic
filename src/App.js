import './App.css';
// import React from 'react';
// import QuoteForm from './components/QuoteForm';
// import swal from 'sweetalert';
// import FilterQuotes from './components/FilterQuotes.jsx';
import Home from './components/Home'
import Detail from './components/DetailQuotes'
import Favorite from './components/FavoriteQuotes'


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
        <div className="text-center mt-3">
          <span className="">
            <Link to='/'>Home</Link>
          </span>
          <span className="ml-3">
            <Link to='/favorites'>Favorites</Link>
          </span>  
        </div>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/detail/:id'>
            <Detail />
          </Route>
          <Route path='/favorites'>
          <Favorite />
        </Route>
        </Switch>
      </div>
    </Router>
  )
  
}

export default App;
