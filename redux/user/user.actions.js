import Actions from "./action-types";

export const setUserState = (user) => ({
	type: Actions.SET_CURRENT_USER,
	payload: user,
});
