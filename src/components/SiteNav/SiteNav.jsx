import React from "react";

import styles from "./SiteNav.css"
import NavElement from "../NavElement/NavElement.jsx"

const SiteNav = () => (
  <div className={styles.root}>
    <NavElement page="Home" />
    <NavElement page="Resources" />
    {/* <NavElement page="Curriculum Vitae" /> */}
    {/* <NavElement page="Writings" /> */}
    {/* <NavElement page="Photography" /> */}
  </div>
);

export default SiteNav;
