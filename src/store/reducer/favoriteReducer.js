
const initialState = {
  favoritesStore : []
}

function reducer (state = initialState, action) {
  const { type, payload } = action;

  if (type === 'favorite/setFavorite') {
    return { ...state, favoritesStore : state.favoritesStore.concat(payload) }
  } else if (type === 'favorite/deleteFavorite') {
    return { ...state, favoritesStore : payload }
  }
  return state;
}

export default reducer;