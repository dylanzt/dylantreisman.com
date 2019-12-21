import React, { Component } from "react";
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
import "normalize.css";

import "./Base.css";
import Home from "./views/Home/Home.jsx";
import Resources from "./views/Resources/Resources.jsx";
import Error from "./views/Error/Error.jsx";
import ComingSoon from "./components/ComingSoon/ComingSoon.jsx";

const routing = (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Redirect exact from="/home" to="/" />
                <Route exact path="/resources" component={Resources} />
                <Route exact component={Error} />
            </Switch>
        </div>
    </BrowserRouter>
);

class App extends Component {
    render() {
        if (!featureFlag.headerFooterLayout) {
            return <ComingSoon />;
        }
        return (
            routing
        );
    }
}
export default App;
