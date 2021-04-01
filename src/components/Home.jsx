import QuoteList from '../components/QuoteList';
// import useFetch from '../helpers/useFetch';
import FilterQuotes from '../components/FilterQuotes.jsx';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { trackPromise } from 'react-promise-tracker';
import { quoteListStore } from '../store/action';

function Home (props) {
  const [show, setShow] = useState('');

  // const { data : quoteList, error } = useFetch('https://stoic-server.herokuapp.com/search/good');

  const quoteList = useSelector(state => state.quotes.quoteListStore);
  const dispatch = useDispatch();

  useEffect(() => {
    trackPromise(
      fetch('https://stoic-server.herokuapp.com/search/good')
        .then(response => 
          response.json()
        )
        .then(quotes => {
          dispatch(quoteListStore(quotes))
        })
        .catch(err => {
          console.log(err);
        }) 
      )
  }, [dispatch])

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
      <h3 style= {{ }} className="text-secondary text-center mt-3"> Pick Your Quotes </h3> <br></br>
      
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