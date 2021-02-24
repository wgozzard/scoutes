import { combineReducers } from 'redux';
import userRedecer from './user/user-reduser';

export default combineReducers({
  user: userRedecer,
});
