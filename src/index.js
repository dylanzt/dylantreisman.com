import React from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";

const app = document.getElementById("app");
app ? ReactDOM.render(<App />, app) : false;
