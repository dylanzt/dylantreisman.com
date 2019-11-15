import React from "react";

import styles from "./NavElement.css"

const NavElement = (props) => (
  <div className={styles.root}>
    {props.page}
  </div>
);

export default NavElement;
