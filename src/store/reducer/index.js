import { combineReducers } from 'redux';
import favoritesReducer from './favoriteReducer';
import quotesReducer from './quotesReducer';

const reducer = combineReducers({
  favorites : favoritesReducer,
  quotes : quotesReducer
})

export default reducer
