import React from 'react';

class QuoteForm extends React.Component {
  constructor () {
    super()

    this.state = {
      author : '',
      quote : '',
      source : ''
    }
  }

  handleOnChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name] : event.target.value
    })
  }

  formOnSubmit (event) {
    event.preventDefault();

    this.props.addQuote(this.state);
  }

  render () {
    return (
      <>
        <form style={{marginLeft : '30px'}} onSubmit= {(event) => this.formOnSubmit(event)}>
          <input 
          type = 'text'
          name = 'author'
          placeholder = 'author'
          value = { this.state.author }
          onChange = { this.handleOnChange }
          /> <br></br> <br/>
          <input 
          type = 'text'
          name = 'quote'
          placeholder = 'quote'
          value = { this.state.quote }
          onChange = { this.handleOnChange }
          /> <br/> <br/>
          <input 
          type = 'text'
          name = 'source'
          placeholder = 'source'
          value = { this.state.source }
          onChange = { this.handleOnChange }
          /> <br/> <br/>
          <button style= {{ marginLeft : '20px' }}> Add Quote </button>
        </form>
      </>
    )
  }
}

export default QuoteForm;