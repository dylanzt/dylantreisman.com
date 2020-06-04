import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
import "normalize.css";

import "./base.scss";
import Home from "Views/Home";
import Resources from "Views/Resources";
import Error from "Views/Error";
import ComingSoon from "Components/ComingSoon";

const helmet = (
    <Helmet defaultTitle="Dylan Treisman" titleTemplate="%s | Dylan Treisman">
        <meta
            name="description"
            content="Hey, I'm Dylan Treisman, an IT professional and
                everything-else amateur. You can find out more about me
                here."
        />
    </Helmet>
);

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
            <div>
                { helmet }
                { routing }
            </div>

        );
    }
}
export default App;
