import * as React from "react";
import ReactDOM from "react-dom";
import Icons from "./components/helpers/icons";

import App from "./components/App";

import "./style/main.scss";

function main() {
  Icons();

  ReactDOM.render(<App />, document.querySelector(".app-wrapper"));
}

document.addEventListener("DOMContentLoaded", main);
