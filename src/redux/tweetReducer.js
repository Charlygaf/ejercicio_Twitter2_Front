function tweetReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TWEET":
      break;
    case "DELETE_TWEET":
      return state;
    default:
      return state;
  }
}

export default tweetReducer;
