import React from "react";
import ReactDOM from "react-dom";
import "../src/styles/index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { Store, presistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
// 1
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

// 2
const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Provider store={Store}>
  <PersistGate persistor={presistor}>
    <App />
  </PersistGate>
</Provider>
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
