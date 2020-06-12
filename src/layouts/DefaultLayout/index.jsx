import React from "react";
import PropTypes from "prop-types";

import styles from "./styles";
import SiteHeader from "Components/SiteHeader";
import SiteFooter from "Components/SiteFooter";
import NavDrawer from "Components/NavDrawer";

class DefaultLayout extends React.Component {
    constructor() {
        super();
        this.state = {
            isDrawerOpen: false,
        };
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer() {
        this.setState(state => ({
            isDrawerOpen: !state.isDrawerOpen,
        }));
    }

    render() {
        return(
            <div>
                <SiteHeader
                    isDrawerOpen={this.state.isDrawerOpen}
                    hamburgerFn={this.toggleDrawer}
                />
                <NavDrawer isDrawerOpen={this.state.isDrawerOpen} />
                <main className={styles.mainContentWrapper}>
                    {this.props.children}
                </main>
                <SiteFooter />
            </div>
        );
    }
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
