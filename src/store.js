// see more https://github.com/prescottprue/react-redux-firebase
// Firebase using Firestore

import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
// import firebase from "firebase/app";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

// Recucers
// import rootReducer from "./reducers";

const firebaseConfig = {
  apiKey: "AIzaSyAoU2KcDeb2z9ylr_bVH1SxQiNKlG7wzpg",
  authDomain: "reactclientpanel-c8995.firebaseapp.com",
  databaseURL: "https://reactclientpanel-c8995.firebaseio.com",
  projectId: "reactclientpanel-c8995",
  storageBucket: "reactclientpanel-c8995.appspot.com",
  messagingSenderId: "448244676673"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize firestore
// const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// Create store with reducers and initial state
const initialState = {};

// Create Store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
