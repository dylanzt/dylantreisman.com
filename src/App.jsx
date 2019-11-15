import React, { Component } from "react";
import "normalize.css";

import "./Base.css";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout.jsx"
import ComingSoon from "./components/ComingSoon/ComingSoon.jsx";

class App extends Component {
  render() {
    return (
      <DefaultLayout>
        <ComingSoon />
      </DefaultLayout>
    );
  }
}
export default App;
