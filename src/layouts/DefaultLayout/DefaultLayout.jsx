import React from "react";
import PropTypes from "prop-types";

import styles from "./styles";
import SiteHeader from "../../components/SiteHeader/SiteHeader";
import SiteFooter from "../../components/SiteFooter/SiteFooter";

const DefaultLayout = (props) => (
    <div>
        <SiteHeader />
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
