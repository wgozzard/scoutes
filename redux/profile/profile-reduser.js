import store from '../state';
import Actions from './action-types';

const InitialState = {
  profile: null,
};

const profileRedecer = (state = InitialState, action) => {
  switch (action.type) {
    case Actions.SET_CURRENT_USER_PROFILE:
      return { ...store, profile: action.payload };
    default:
      return state;
  }
};

export default profileRedecer;
