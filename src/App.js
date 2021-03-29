import './App.css';
import React from 'react';
import QuoteList from './components/QuoteList';

class App extends React.Component {
  constructor () {
    super ()

    this.state = {
      quoteList : [],
      favorit : []
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

  componentDidMount () {
    this.getDataFromServer();
  }
 
  render () {
    const { quoteList } = this.state;

    return (
      <>
        <h3> Welcome to Daily Stoic </h3> <br></br>

        <ul>
          {
            quoteList.map(ayam => {
              return <QuoteList quote = { ayam } key= { ayam.id }> </QuoteList>
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
