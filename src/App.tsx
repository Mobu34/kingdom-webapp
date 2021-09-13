import React from "react";
import "./App.css";
import { Provider } from "react-redux";

import Navigation from "./navigation/Navigation";

import { store } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Navigation />
      </div>
    </Provider>
  );
};

export default App;
