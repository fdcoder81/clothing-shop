import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDiLQkPBrn1TzAdoqhFkAtVN2DroJDVO3M",
  authDomain: "clothing-shop-19124.firebaseapp.com",
  databaseURL: "https://clothing-shop-19124.firebaseio.com",
  projectId: "clothing-shop-19124",
  storageBucket: "clothing-shop-19124.appspot.com",
  messagingSenderId: "972727307408",
  appId: "1:972727307408:web:f7d119552c70ffca9adc15"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
