import axios from "axios";

function userReducer(state = [], action) {
  switch (action.type) {
    case "ADD_USER":
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