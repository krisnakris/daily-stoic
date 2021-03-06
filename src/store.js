import { createStore } from 'redux';

const initialState = {
  quoteListStore : [],
  favoritesStore : []
}

function reducer (state = initialState, action) {
  const { type, payload } = action;

  if (type === 'quotes/setQuotes') {
    return { ...state, quoteListStore : payload }
  } else if (type === 'favorite/setFavorite') {
    return { ...state, favoritesStore : state.favoritesStore.concat(payload) }
  } else if (type === 'favorite/deleteFavorite') {
    return { ...state, favoritesStore : payload }
  }
  return state;
}

const store = createStore(reducer);

export default store;