function tweetReducer(state = [], action) {
  switch (action.type) {
    case "INITIAL_STATE":
      return [
        ...state,
        {
          ...state.tweets,
          ...action.payload,
        },
      ];
    case "SHOW_TWEETS_FOLLOWING":
      return state;
    case "ADD_TWEET":
      break;
    case "DELETE_TWEET":
      return state;
    default:
      return state;
  }
}

export default tweetReducer;
