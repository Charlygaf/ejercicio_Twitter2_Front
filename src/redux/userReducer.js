function userReducer(state = [null], action) {
  switch (action.type) {
    case "LOGIN":
      return [
        ...state,
        {
          ...state.users,
          ...{ ...state.users, ...action.payload },
        },
      ];
    case "CREATE_USER":
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
