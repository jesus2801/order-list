import { combineReducers } from 'redux';

import userReducer from './user.reducers';

//combine all reducers on one
export default combineReducers({
  user: userReducer,
});
