import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import checkNameFunction from '../helpers/generateImage';

function DetailQuote (props) {
  const params = useParams(); 

  const [detailQuotes, setDetailQuote] = useState([]);

  useEffect(() =>  {
    let { id } = params; 
    fetch('https://stoic-server.herokuapp.com/quotes/' + (id))
    .then(res => res.json())
    .then(res => {
      setDetailQuote(res[0]);
    })
    .catch(err => {
      console.log(err);
    })
  }, [params])

  const checkName = checkNameFunction(detailQuotes.author);

  return (
    <div className="container">
      <h3 className="text-secondary text-center mt-3">Detail</h3>
      
      <div className="mt-5 d-flex justify-content-center">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src= {checkName}/>
          <Card.Body>
            <Card.Title> { detailQuotes.author } </Card.Title>
              { detailQuotes.body }
              <div style={{ color: 'blue' }}> 
                Source : <br></br>
                { detailQuotes.quotesource } 
              </div>
          </Card.Body>
        </Card>
      </div>
     
    </div>
 
  )
}

export default DetailQuote;

