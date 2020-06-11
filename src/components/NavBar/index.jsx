import React from "react";

import styles from "./styles";
import { NavLink } from "react-router-dom";

const menu = [
    // { name: "Home" },
    { name: "Curriculum Vitae", target: "cv" },
    { name: "Resources" },
    { name: "Writings" },
    { name: "Photography" },
];

const NavBar = () => (
    <nav className={styles.root}>
        <ul className={styles.navList}>
            {menu.map((item) => (
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

export default NavBar;
