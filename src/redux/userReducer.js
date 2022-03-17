import axios from "axios";

function userReducer(state = [], action) {
  switch (action.type) {
    case "ADD_USER":
      return [
        ...state,
        {
          firstname: action.payload,
          lastname: action.payload,
          userName: action.payload,
          email: action.payload,
          birthDate: action.payload,
          password: action.payload,
        },
      ];
    case "ADD_FOLLOWER":
      return state;
    case "REMOVE_FOLLOWER":
      return state;

    default:
      return state;
  }
}

export default userReducer;
