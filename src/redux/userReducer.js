function userReducer(state = {}, action) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "SIGN_UP":
      return state;
    case "ADD_FOLLOWER":
      return state;
    case "REMOVE_FOLLOWER":
      return state;
    default:
      return state;
  }
}

export default userReducer;
