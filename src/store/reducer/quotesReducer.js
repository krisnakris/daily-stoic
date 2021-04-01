
const initialState = {
  quoteListStore : []
}

function reducer (state = initialState, action) {
  const { type, payload } = action;

  if (type === 'quotes/setQuotes') {
    return { ...state, quoteListStore : payload }
  } 
  return state;
}

export default reducer;