// import '../';
// import React from 'react';
import QuoteList from '../components/QuoteList';
// import QuoteForm from './components/QuoteForm';
// import swal from 'sweetalert';
import useFetch from '../helpers/useFetch';
import FilterQuotes from '../components/FilterQuotes.jsx';
import { useState } from 'react';

function Home (props) {
  const [show, setShow] = useState('');

  const { data : quoteList, loading, error } = useFetch('https://stoic-server.herokuapp.com/search/good');

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
    return <h1> Error loading page </h1>
  }

  // function addQuote (quote) {
  //   quote.id = Math.random() * 50000000;
  //   quote.quotesource = quote.source;
  //   quote.body = quote.quote;
  //   let newQuoteList = quoteList.concat(quote);
  //   setQuotes(newQuoteList);
  //   swal(`Quote ${quote.quote} added to list`, "Check it in the bottom of the page !", "success");
  // } 


  function filteredQuotes (filter) {
    setShow(filter);
  }

  const quoteToShow = show === '' ? quoteList : quoteList.filter(quote => quote.author.toLowerCase().includes(show.toLowerCase()));

  return (
    <>
      <h3 style= {{ textAlign: 'center' }}> Pick Your Quotes </h3> <br></br>
      
      <div className='container'>
        <FilterQuotes filteredQuotes = { filteredQuotes } />

        <div className='container-image mt-5'>
          <div className="row" style= {{ marginBottom: "20rem" }} >
          {
            quoteToShow.map(quote => {
              return <QuoteList  quote = { quote } key= { quote.id }> </QuoteList>
            })
          }
          </div>   
        </div>
    
      </div>
    </>
  )

}

export default Home;