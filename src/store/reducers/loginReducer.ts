import * as types from "../actions";

export default function (state = {}, action) {
  const response = action.response;

  switch (action.type) {
    case types.LOGIN_USER:
      return { ...state, loading: true };
    case types.LOGIN_USER_SUCCESS:
      return { ...state, ...response, loading: false };
    case types.LOGIN_USER_ERROR:
      return { ...state, ...response, loading: false };
    default:
      return state;
  }
}
