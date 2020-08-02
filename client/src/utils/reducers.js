function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_IS_LOADING":
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case "SHOW_MESSAGE":
      return {
        ...state,
        message: action.message,
        messageStatus: action.messageStatus,
      };
  }
}

export default reducer;
