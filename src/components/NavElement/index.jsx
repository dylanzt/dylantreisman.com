import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import styles from "./styles";

const NavElement = (props) => (
    <NavLink
        exact
        className={styles.root}
        activeClassName={styles.active}
        to={`/${props.to || props.page.toLowerCase()}`}
    >
        {props.page}
    </NavLink>
);

NavElement.propTypes = {
    to: PropTypes.string,
    page: PropTypes.string.isRequired,
};

export default NavElement;
