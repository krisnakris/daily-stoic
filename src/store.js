import { createStore } from 'redux';

const initialState = {
  counter : 0,
  quoteListStore : []
}

function reducer (state = initialState, action) {
  const { type, payload } = action;

  if (type === 'counter/increment') {
    return { ...state, counter: state.counter + payload }
  } else if (type === 'quotes/setQuotes') {
    return { ...state, quoteListStore : payload }
  }
  return state;
}

const store = createStore(reducer);

export default store;