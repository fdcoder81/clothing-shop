import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header.js";
import LoginRegister from "./components/login-register/LoginRegister";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserID, setCurrentUserID] = useState(null);

  useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
          setCurrentUserID(snapshot.id);
        });
        console.log(currentUser);
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [currentUserID]);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/login" component={LoginRegister} />
      </Switch>
    </div>
  );
}

export default App;
