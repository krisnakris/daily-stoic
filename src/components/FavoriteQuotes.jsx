import { useSelector } from 'react-redux';
import QuoteList from './QuoteList';

function FavoritesQuotes () {

  const listFavorite = useSelector(state => state.favoritesStore)

  return (
    <>
      <div className='container'>

        <h3 style= {{ textAlign: 'center' }}> List of favorites </h3> <br></br>

        <div className='container-image mt-5'>
          <div className="row" style= {{ marginBottom: "20rem" }} >
          {
            listFavorite.map(favorite => {
              return <QuoteList quote = { favorite } key = { favorite.id } fromFavorite = { true }/>
            })
          }
         </div>
        </div>

      </div>
    </>
  )
}

export default FavoritesQuotes;