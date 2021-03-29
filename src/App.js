import './App.css';
import React from 'react';
import QuoteList from './components/QuoteList';
import QuoteForm from './components/QuoteForm';

class App extends React.Component {
  constructor () {
    super ()

    this.state = {
      quoteList : [],
      favorit : [],
      filterBy : ''
    }
  }

  getDataFromServer = () => {
    fetch('https://stoic-server.herokuapp.com/search/good')
      .then(res => res.json())
      .then(res => {
        this.setState({
          ...this.state,
          quoteList : res
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  addQuote = (quote) => {
    quote.id = Math.random() * 50000000;
    quote.quotesource = quote.source;
    quote.body = quote.quote;
    let newQuoteList = this.state.quoteList.concat(quote);
    this.setState({
      ...this.state,
      quoteList : newQuoteList
    })
  }

  componentDidMount () {
    this.getDataFromServer();
  }
 
  render () {
    const { quoteList } = this.state;

    return (
      <>
        <h3 style= {{ textAlign: 'center' }}> Welcome to Daily Stoic </h3> <br></br>

        <QuoteForm addQuote = { this.addQuote }/>

        <ul>
          {
            quoteList.map(quote => {
              return <QuoteList quote = { quote } key= { quote.id }> </QuoteList>
            })
          }
        </ul>
      </>
    )
  }
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
