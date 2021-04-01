import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faInfoCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from 'react-router-dom';
import { favoriteStore, deleteSingleFavoriteStore } from '../store/action';
import swal from 'sweetalert';
import checkNameFunction from '../helpers/generateImage';

function QuoteList ( props ) {
  const [showFavorite, setShowFavorite] = useState(props.fromFavorite ? false : true);
  const favorite = useSelector(state => state.favorites.favoritesStore);

  const dispatch = useDispatch();

  let history = useHistory();

  function detailQuote () {
    history.push('/detail/' + props.quote.id);
  }

  let checkName = checkNameFunction(props.quote.author);

  function addToFavorites (event) {
    event.preventDefault();
    let newFavorite = favorite.find(fav => fav.id === props.quote.id)

    if (newFavorite) {

    } else {
      dispatch(favoriteStore(props.quote));
    }
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
      <div className="col-3 mb-5">
        <Card >
          <Card.Img variant="top" src= { checkName } />
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
          </Card.Body>
        </Card>
      </div>
    </>
  )
  
}

export default QuoteList;