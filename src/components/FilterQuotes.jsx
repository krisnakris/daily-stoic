import React from 'react';

function FilterQuote (props) {

  function changeFilter (event) {
    
    props.filteredQuotes(event.target.value);
  }

  return (
    <>
       <form style={{marginLeft : '30px', textAlign: 'center'}} >
          <input 
          type = 'text'
          name = 'author'
          placeholder = 'author'
          onChange = { event => changeFilter(event) }

          />
        </form>
    </>
  )
}

export default FilterQuote;