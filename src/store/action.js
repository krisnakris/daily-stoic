export function quoteListStore (payload) {
  return { type : 'quotes/setQuotes', payload }
}

export function favoriteStore (payload) {
  return { type : 'favorite/setFavorite', payload }
}

