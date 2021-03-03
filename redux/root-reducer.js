import { combineReducers } from 'redux';
import profileRedecer from './profile/profile-reduser';
import userRedecer from './user/user-reduser';

export default combineReducers({
  user: userRedecer,
  profile: profileRedecer,
});
