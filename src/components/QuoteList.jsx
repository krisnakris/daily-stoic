import React from 'react';

class QuoteList extends React.Component {
  
  render () {
    const { quote } = this.props;

    return (
      <>
        <li key= { quote.id } > { quote.author } : <br></br> { quote.body } <br/> <br/> </li>
      </>
    )
  }
}

export default QuoteList;