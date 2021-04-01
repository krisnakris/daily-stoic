import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

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

  function checkName () {
    if (detailQuotes.author === 'Seneca') {
      return 'http://www.themajormunch.com/wp-content/uploads/2018/08/seneca_360x450_0-570x600.jpg';
    } else if (detailQuotes.author === 'Epictetus') {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Epicteti_Enchiridion_Latinis_versibus_adumbratum_%28Oxford_1715%29_frontispiece.jpg/400px-Epicteti_Enchiridion_Latinis_versibus_adumbratum_%28Oxford_1715%29_frontispiece.jpg';
    } else if (detailQuotes.author === 'Marcus Aurelius') {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/L%27Image_et_le_Pouvoir_-_Buste_cuirass%C3%A9_de_Marc_Aur%C3%A8le_ag%C3%A9_-_3.jpg/440px-L%27Image_et_le_Pouvoir_-_Buste_cuirass%C3%A9_de_Marc_Aur%C3%A8le_ag%C3%A9_-_3.jpg'
    } else {
      return 'https://upload.wikimedia.org/wikipedia/commons/4/44/Duble_herma_of_Socrates_and_Seneca_Antikensammlung_Berlin_07.jpg';
    }
  }

  return (
    <div className="container">
      <h3 className="text-secondary text-center mt-3">Detail</h3>
      
      <div className="mt-5 d-flex justify-content-center">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src= {checkName()}/>
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

