import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import checkNameFunction from '../helpers/generateImage';
import { useDispatch, useSelector } from 'react-redux';
import { asyncDetailQuotesStore } from '../store/action';

function DetailQuote (props) {
  const params = useParams(); 

  // const [detailQuotes, setDetailQuote] = useState([]);

  const detailQuotes = useSelector(state => state.quotes.quoteDetailStore);
  const dispatch = useDispatch();

  useEffect(() =>  {
    let { id } = params; 

    dispatch(asyncDetailQuotesStore(id));
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
              <div style={{ color: 'blue' }}> 
                Source : <br></br>
                { detailQuotes.quotesource } 
              </div>

              { detailQuotes.body }

          </Card.Body>
        </Card>
      </div>
     
    </div>
 
  )
}

export default DetailQuote;

