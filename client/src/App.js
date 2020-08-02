import React, { useReducer } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllPizzas from "./containers/AllPizzas";
import NewIngredient from "./containers/NewIngredient";
import NewPizza from "./containers/NewPizza";
import NavBar from "./components/NavBar/NavBar";
import LoadingContext from "./utils/LoadingContext";
import Toast from "./components/Toast/Toast";

import reducer from "./utils/reducers";

function App() {
  const [{ isLoading, message, messageStatus }, dispatch] = useReducer(
    reducer,
    {
      isLoading: false,
      message: "",
      messageStatus: "success",
    }
  );
  return (
    <Router>
      <LoadingContext.Provider
        value={{ isLoading, dispatch, message, messageStatus }}
      >
        <NavBar />
        <Toast />
        <Route exact path="/" component={AllPizzas} />
        <Route exact path="/ingredient/new" component={NewIngredient} />
        <Route exact path="/pizza/new" component={NewPizza} />
      </LoadingContext.Provider>
    </Router>
  );
}

export default App;
