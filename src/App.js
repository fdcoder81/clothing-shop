import React from "react";

import "./App.css";

import Homepage from "./components/Homepage";
import ShopPage from "./components/ShopPage";
import Header from "./components/Header";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
