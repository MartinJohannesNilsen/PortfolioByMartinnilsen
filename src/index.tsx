import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import AppRouter from "./Router";

ReactDOM.render(
  //Interferes with themeprovider
  //https://stackoverflow.com/questions/62935784/material-ui-unchanged-colors-when-switching-back-and-forth-between-themes
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
