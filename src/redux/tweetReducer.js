function tweetReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TWEET":
      return state;
    case "DELETE_TWEET":
      return state;
    case "LIKE_UNLIKE_TWEET":
      return state;
    default:
      return state;
  }
}

export default tweetReducer;
