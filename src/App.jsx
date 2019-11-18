import React, { Component } from "react";
import "normalize.css";

import "./Base.css";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout.jsx"
import Home from "./views/Home/Home.jsx"
import Resources from "./views/Resources/Resources.jsx"
import ComingSoon from "./components/ComingSoon/ComingSoon.jsx";

class App extends Component {
  render() {
    if (!featureFlag.headerFooterLayout) {
      return <ComingSoon />
    }
    return (
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    );
  }
}
export default App;
