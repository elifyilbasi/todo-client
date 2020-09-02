const TYPES = {
  showLoading: "loading/showLoading",
  hideLoading: "loading/hideLoading",
};

export const showLoading = () => ({
  type: TYPES.showLoading,
});

export const hideLoading = () => ({
  type: TYPES.hideLoading,
});

const INITIAL_STATE = {
  loadingCounter: 0,
};

const reducer = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.showLoading:
      return {
        ...state,
        loadingCounter: state.loadingCounter + 1,
      };
    case TYPES.hideLoading:
      return {
        ...state,
        loadingCounter: state.loadingCounter - 1,
      };
    default:
      return state;
  }
};

export { reducer };
