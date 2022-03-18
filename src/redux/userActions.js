const userActions = {
  login: function (session) {
    return {
      type: "LOGIN",
      payload: session,
    };
  },
};

export default userActions;
