import React from "react";

import styles from "./styles";
import { NavLink } from "react-router-dom";
import NavWrapper from "Components/NavWrapper";
import { hamburgerProps } from "src/propTypes";

const createDrawer = (props) => (
    <div className={styles.root}>
        <div className={styles.drawer}>
            {props.menuList.map((item) => (
                <li key={item.name} className={styles.navListItem}>
                    <NavLink
                        exact
                        className={styles.navLink}
                        activeClassName={styles.navLinkActive}
                        to={`/${item.target || item.name.toLowerCase()}`}
                    >
                        {item.name}
                    </NavLink>
                </li>
            ))}
        </div>
        <div className={styles.overlay} onClick={props.toggleDrawer} />
    </div>
);

const NavDrawer = (props) =>
    props.isDrawerOpen ? createDrawer(props) : null;

NavDrawer.propTypes = hamburgerProps;

export default NavWrapper(NavDrawer);
