import store from '../state';
import Actions from './action-types';

const InitialState = {
  currentUser: null,
};

const userRedecer = (state = InitialState, action) => {
  switch (action.type) {
    case Actions.SET_CURRENT_USER:
      return { ...store, currentUser: action.payload };
    default:
      return state;
  }
};

export default userRedecer;
