import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Routes from "./routers";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./index.css";

import "./app.css";

import "./i18n/i18n";

const App = () => {
  return (
    <div className="App">
      <Routes />
    </div>
  );
};

ReactDOM.render(
  <React.Suspense fallback={<div>loading...</div>}>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.Suspense>,

  document.getElementById("app")
);
