const initialState = {
  counter : 0,
  quoteListStore : [],
  favoritesStore : []
}

function reducer (state = initialState, action) {
  const { type, payload } = action;

  if (type === 'counter/increment') {
    return { ...state, counter: state.counter + payload }
  } else if (type === 'quotes/setQuotes') {
    return { ...state, quoteListStore : payload }
  } else if (type === 'favorite/setFavorite') {
    return { ...state, favoritesStore : state.favoritesStore.concat(payload) }
  }
  return state;
}

export default reducer;