
const initialState = {
  quoteListStore : [],
  quoteDetailStore : {}
}

function reducer (state = initialState, action) {
  const { type, payload } = action;

  if (type === 'quotes/setQuotes') {
    return { ...state, quoteListStore : payload }
  } else if (type === 'quotes/detailQuotes') {
    return { ...state, quoteDetailStore : payload }
  }
  return state;
}

export default reducer;