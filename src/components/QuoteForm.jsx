import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function QuoteForm (props) {
  const [author, setAuthor] = useState('');
  const [quote, setQuote] = useState('');
  const [source, setSource] = useState('');

  function formOnSubmit (event) {
    event.preventDefault();

    let object = {
      author, quote, source
    }

    props.addQuote(object);
  }

  return (
    <>
      <form style={{marginLeft : '30px'}} >
        <input 
        type = 'text'
        name = 'author'
        placeholder = 'author'
        onChange = {event => setAuthor(event.target.value) }
        // value = { author }
        /> <br></br> <br/>
        <input 
        type = 'text'
        name = 'quote'
        placeholder = 'quote'
        onChange = {event => setQuote(event.target.value) }
        // value = { quote }

        /> <br/> <br/>
        <input 
        type = 'text'
        name = 'source'
        placeholder = 'source'
        onChange = {event => setSource(event.target.value) }
        // value = { source }

        /> <br/> <br/>
        {/* <button style= {{ marginLeft : '20px' }}> Add Quote </button> */}
        <Button variant="success" style= {{ marginLeft : '20px' }} onClick= {(event) => formOnSubmit(event)} > Success </Button>{' '}
      </form>
    </>
  )
  
}

export default QuoteForm;