import React from "react";

import styles from "./styles";
import { NavLink } from "react-router-dom";
import NavWrapper from "Components/NavWrapper";

const NavBar = (props) => (
    <nav className={styles.root}>
        <ul className={styles.navList}>
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
        </ul>
    </nav>
);

export default NavWrapper(NavBar);
