import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';

function QuoteList ( props ) {

  // function detailQuote (event) {
  //   event.preventDefault();

  //   props.detailQuote(props.quote.id);
  // }
  function detailQuote () {
    fetch('https://stoic-server.herokuapp.com/quotes/' + props.quote.id)
    .then(res => res.json())
    .then(res => {
      swal(`${res[0].body}`, "", "");
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <>
      <div style={{marginLeft: '30px'}}>
        <li style={{color: 'red'}}> { props.quote.author } : <br></br> </li>
        <span> { props.quote.body } </span> <br></br>
        <span style={{color: 'blue'}}> Source : { props.quote.quotesource } </span> <br/> 
        <Button variant="success" style= {{ marginLeft : '20px' }} onClick= {(event) => detailQuote(event)} > Detail </Button>{' '}
        <br></br>  <br></br> 
      </div>
    </>
  )
  
}

export default QuoteList;