import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./store/configureStore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { Provider } from "react-redux";
import { createFirestoreInstance } from "redux-firestore";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";

const store = configureStore();

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  allowMultipleListeners: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>
);

reportWebVitals();
