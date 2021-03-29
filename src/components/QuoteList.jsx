import React from 'react';

class QuoteList extends React.Component {
  
  render () {
    const { quote } = this.props;

    return (
      <>
        <div style={{marginLeft: '30px'}}>
          <li style={{color: 'red'}}> { quote.author} : <br></br> </li>
          <span> { quote.body } </span> <br></br>
          <span style={{color: 'blue'}}> Source : { quote.quotesource } </span>
          <br></br>  <br></br> 
        </div>
      </>
    )
  }
}

export default QuoteList;