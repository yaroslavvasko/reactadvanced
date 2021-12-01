import React from "react";
import ReactDOM from "react-dom";
import Presentation from "./presentation/presentation";
import reportWebVitals from "./reportWebVitals";
import ReactNotification from "react-notifications-component";

import "./index.css";
import "react-notifications-component/dist/theme.css";

ReactDOM.render(
  <>
    <Presentation />
    <ReactNotification />
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
