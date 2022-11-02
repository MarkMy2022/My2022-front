import { combineReducers } from 'redux';
import postReducer from './post';
import usersReducer from './users';

const rootReducer = combineReducers({
  post: postReducer,
  user: usersReducer,
});

export default rootReducer;
