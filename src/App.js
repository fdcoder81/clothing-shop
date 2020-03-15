import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header.js";
import LoginRegister from "./components/login-register/LoginRegister";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/login" component={LoginRegister} />
      </Switch>
    </div>
  );
}

export default App;
