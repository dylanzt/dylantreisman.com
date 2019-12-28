import React, { Component } from "react";
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
import "normalize.css";

import "./Base.scss";
import Home from "Views/Home";
import Resources from "Views/Resources";
import Error from "Views/Error";
import ComingSoon from "Components/ComingSoon";

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
