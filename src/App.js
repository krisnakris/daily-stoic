import './App.css';
// import React from 'react';
import QuoteList from './components/QuoteList';
import QuoteForm from './components/QuoteForm';
import swal from 'sweetalert';
import useFetch from './helpers/useFetch';

function App () {

  const { data : quoteList, loading, error, setData : setQuotes } = useFetch('https://stoic-server.herokuapp.com/search/good');

  if (loading) {
    return (
      <div className='text-center'>
        <div className='spinner-border text-primary' style= {{ width: '30rem', height: '30rem' }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return <h1>Something error...</h1>
  }

  function addQuote (quote) {
    quote.id = Math.random() * 50000000;
    quote.quotesource = quote.source;
    quote.body = quote.quote;
    let newQuoteList = quoteList.concat(quote);
    setQuotes(newQuoteList);
    swal(`Quote ${quote.quote} added to list`, "Check it in the bottom of the page !", "success");
  } 

  return (
    <>
      <h3 style= {{ textAlign: 'center' }}> Welcome to Daily Stoic </h3> <br></br>
      
      <div className='container-fluid'>

        <QuoteForm addQuote = { addQuote }/>

        <div className='container-image'>
          <div className="row" style= {{ marginBottom: "20rem" }} >
          {
            quoteList.map(quote => {
              return <QuoteList  quote = { quote } key= { quote.id }> </QuoteList>
            })
          }
          </div>   
        </div>
    
      </div>
    </>
  )
  
}

export default App;
