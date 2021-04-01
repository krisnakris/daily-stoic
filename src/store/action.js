import { trackPromise } from 'react-promise-tracker';

export function quoteListStore (payload) {
  return { type : 'quotes/setQuotes', payload }
}

export function favoriteStore (payload) {
  return { type : 'favorite/setFavorite', payload }
}

export function deleteSingleFavoriteStore (payload) {
  return { type : 'favorite/deleteFavorite', payload }
}

export function detailQuotesStore (payload) {
  return { type : 'quotes/detailQuotes', payload }
}

export function asyncQuoteListStore () {
  return (dispatch) => {
    trackPromise(
      fetch('https://stoic-server.herokuapp.com/search/good')
        .then(response => 
          response.json()
        )
        .then(quotes => {
          dispatch(quoteListStore(quotes))
        })
        .catch(err => {
          console.log(err);
        }) 
      )
  }
}

export function asyncDetailQuotesStore (id) {
  return (dispatch) => {
    trackPromise(
      fetch('https://stoic-server.herokuapp.com/quotes/' + (id))
      .then(res => res.json())
      .then(res => {
        dispatch(detailQuotesStore(res[0]));
      })
      .catch(err => {
        console.log(err);
      })
    )
  }
}
