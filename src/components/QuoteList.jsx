import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class QuoteList extends React.Component {
  constructor () {
    super();

    this.state = {

    }
  }
  
  detailQuote (event) {
    event.preventDefault();

    this.props.detailQuote(this.props.quote.id);
  }

  render () {
    const { quote } = this.props;

    return (
      <>
        <div style={{marginLeft: '30px'}}>
          <li style={{color: 'red'}}> { quote.author} : <br></br> </li>
          <span> { quote.body } </span> <br></br>
          <span style={{color: 'blue'}}> Source : { quote.quotesource } </span> <br/> 
          <Button variant="success" style= {{ marginLeft : '20px' }} onClick= {(event) => this.detailQuote(event)} > Detail </Button>{' '}
          <br></br>  <br></br> 
        </div>
      </>
    )
  }
}

export default QuoteList;