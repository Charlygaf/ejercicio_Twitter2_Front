const actions = {
  initialState: function (tweets) {
    return { type: "INITIAL_STATE", payload: tweets };
  },
};

export default actions;
