import './App.css';
import React, { useState, useEffect } from 'react';
import QuoteList from './components/QuoteList';
import QuoteForm from './components/QuoteForm';
import swal from 'sweetalert';

function App () {
  const [quoteList, setQuotes] = useState([]);

  function getDataFromServer () {
    fetch('https://stoic-server.herokuapp.com/search/good')
      .then(res => res.json())
      .then(res => {
          setQuotes(res)
        })
      .catch(err => {
        console.log(err);
      })
  }

  function addQuote (quote) {
    quote.id = Math.random() * 50000000;
    quote.quotesource = quote.source;
    quote.body = quote.quote;
    let newQuoteList = quoteList.concat(quote);
    // this.setState({
    //   ...this.state,
    //   quoteList : newQuoteList
    // })
    setQuotes(newQuoteList);
    swal(`Quote ${quote.quote} added to list`, "Check it in the bottom of the page !", "success");
  }

  function detailQuote (id) {
    fetch('https://stoic-server.herokuapp.com/quotes/' + id)
    .then(res => res.json())
    .then(res => {
      swal(`${res[0].body}`, "", "");

    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    getDataFromServer()
  }, [])
 

  return (
    <>
      <h3 style= {{ textAlign: 'center' }}> Welcome to Daily Stoic </h3> <br></br>
      
      <div className='container-fluid'>

        <QuoteForm addQuote = { addQuote }/>

        <ul>
          {
            quoteList.map(quote => {
              return <QuoteList detailQuote = {detailQuote}  quote = { quote } key= { quote.id }> </QuoteList>
            })
          }
        </ul>       
      </div>
    </>
  )
  
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
