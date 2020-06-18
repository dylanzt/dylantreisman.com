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
        const hamburgerProps = {
            isDrawerOpen: this.state.isDrawerOpen,
            toggleDrawer: this.toggleDrawer,
        };

        return(
            <div>
                <SiteHeader hamburgerProps={hamburgerProps} />
                <NavDrawer {...hamburgerProps} />
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
