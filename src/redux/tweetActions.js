const tweetActions = {
  showFollowingTweets: function (tweets) {
    return {
      type: "LOGIN",
      payload: tweets,
    };
  },
};

export default tweetActions;
