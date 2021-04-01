import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faInfoCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from 'react-router-dom';
import { favoriteStore, deleteSingleFavoriteStore } from '../store/action';
import swal from 'sweetalert';

function QuoteList ( props ) {
  // const [isShown, setisShown] = useState(false);
  const [showFavorite, setShowFavorite] = useState(props.fromFavorite ? false : true);
  const favorite = useSelector(state => state.favoritesStore);

  const dispatch = useDispatch();

  let history = useHistory();

  function detailQuote () {
    history.push('/detail/' + props.quote.id);
  }

  function checkName () {
    if (props.quote.author === 'Seneca') {
      return 'http://www.themajormunch.com/wp-content/uploads/2018/08/seneca_360x450_0-570x600.jpg';
    } else if (props.quote.author === 'Epictetus') {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Epicteti_Enchiridion_Latinis_versibus_adumbratum_%28Oxford_1715%29_frontispiece.jpg/400px-Epicteti_Enchiridion_Latinis_versibus_adumbratum_%28Oxford_1715%29_frontispiece.jpg';
    } else if (props.quote.author === 'Marcus Aurelius') {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/L%27Image_et_le_Pouvoir_-_Buste_cuirass%C3%A9_de_Marc_Aur%C3%A8le_ag%C3%A9_-_3.jpg/440px-L%27Image_et_le_Pouvoir_-_Buste_cuirass%C3%A9_de_Marc_Aur%C3%A8le_ag%C3%A9_-_3.jpg'
    } else {
      return 'https://upload.wikimedia.org/wikipedia/commons/4/44/Duble_herma_of_Socrates_and_Seneca_Antikensammlung_Berlin_07.jpg';
    }
  }

  function addToFavorites (event) {
    event.preventDefault();
    dispatch(favoriteStore(props.quote));
    swal(`Quote added to favorites`, "Check it in on the favorite list!", "success");
  }

  function showFavoriteIcon () {
    return (
      <div>
        { 
          showFavorite  && 
           <>
            <FontAwesomeIcon icon={ faHeart }/>
            <span className="ml-3">
              Add to favorites
            </span>
          </>
        }
      </div>
    )
  }

  function showTrashIcon () {
    return (
      <div>
        {
          !showFavorite  && 
          <>
            <FontAwesomeIcon icon={ faTrash }/>
            <span className="ml-3">
              Delete
            </span>
          </>
        }
      </div>
    )
  }

  function deleteFavorite (event) {
    event.preventDefault();

    let newFavorite = favorite.filter(fav => fav.id !== props.quote.id)

    // dispatch(deleteSingleFavoriteStore(newFavorite));
    // swal(`Quote added to favorites`, "Check it in on the favorite list!", "success");
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this favorite !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        dispatch(deleteSingleFavoriteStore(newFavorite));
        swal("Poof! Your quote has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your quote is safe!");
      }
    });
  }

  return (

    <>
      {/* <div style={{marginLeft: '30px'}}>
        <li style={{color: 'red'}}> { props.quote.author } : <br></br> </li>
        <span> { props.quote.body } </span> <br></br>
        <span style={{color: 'blue'}}> Source : { props.quote.quotesource } </span> <br/> 
        <Button variant="success" style= {{ marginLeft : '20px' }} onClick= {(event) => detailQuote(event)} > Detail </Button>{' '}
        <br></br>  <br></br> 
      </div> */}
      <div className="col-3 mb-5">
        <Card >
          <Card.Img variant="top" src= {checkName()} />
          <Card.Body>
            <Card.Title> { props.quote.author } </Card.Title>
            <Card.Text className="card-text">
              { props.quote.body }
            </Card.Text>
              <div className="ml-3" onClick= {(event) => detailQuote(event)}
              >
                <Link to="/detail/" ></Link>
                <FontAwesomeIcon icon={ faInfoCircle }/>
                <span className="ml-3">Detail</span>
              </div>

              <div className="ml-3" onClick= {(event) => addToFavorites(event)}
              >
                { showFavoriteIcon() }
              </div>
              
              <div className="ml-3" onClick= {(event) => deleteFavorite(event)}
              >
                { showTrashIcon() }
              </div>

              {/* Detail</Button> */}
          </Card.Body>
        </Card>
      </div>
    </>
  )
  
}

export default QuoteList;