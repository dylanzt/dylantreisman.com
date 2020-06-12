import React from "react";
import PropTypes from "prop-types";

import styles from "./styles";

const Drawer = (
    <div className={styles.root}>
        <div className={styles.drawer}>
            Some menu content <br/>
            A second option <br/>
            More menu <br/>
        </div>
    </div>
);

const NavDrawer = (props) => props.isDrawerOpen ? Drawer : null;

NavDrawer.propTypes = {
    isDrawerOpen: PropTypes.bool.isRequired,
};

export default NavDrawer;
