import React from "react";

const LoadingContext = React.createContext({
  isLoading: true,
  dispatch: () => null,
  errorMessage: ""
});

export default LoadingContext;
