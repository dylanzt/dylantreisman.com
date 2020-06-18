import React from "react";

import styles from "./styles";
import { hamburgerProps } from "src/propTypes";

const createDrawer = (onClick) => (
    <div className={styles.root}>
        <div className={styles.drawer}>
            Some menu content <br/>
            A second option <br/>
            More menu <br/>
        </div>
        <div className={styles.overlay} onClick={onClick} />
    </div>
);

const NavDrawer = (props) =>
    props.isDrawerOpen ? createDrawer(props.toggleDrawer) : null;

NavDrawer.propTypes = hamburgerProps;

export default NavDrawer;
