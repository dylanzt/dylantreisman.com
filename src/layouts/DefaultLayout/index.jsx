import React from "react";
import PropTypes from "prop-types";

import styles from "./styles";
import SiteHeader from "Components/SiteHeader";
import SiteFooter from "Components/SiteFooter";
import NavDrawer from "Components/NavDrawer";

const DefaultLayout = (props) => (
    <div>
        <SiteHeader />
        <NavDrawer />
        <main className={styles.mainContentWrapper}>
            {props.children}
        </main>
        <SiteFooter />
    </div>
);

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
