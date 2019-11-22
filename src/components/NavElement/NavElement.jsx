import React from "react";
import { NavLink } from 'react-router-dom';

import styles from "./NavElement.css";

const NavElement = (props) => (
  <NavLink exact className={styles.root} activeClassName={styles.active} to={`/${props.to || props.page.toLowerCase()}`}>{props.page}</NavLink>
);

export default NavElement;
