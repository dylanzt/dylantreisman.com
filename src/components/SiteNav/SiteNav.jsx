import React from "react";

import styles from "./SiteNav.css"
import NavElement from "../NavElement/NavElement.jsx"

const SiteNav = () => (
  <div className={styles.root}>
    {/* <NavElement page="Home" /> */}
    <NavElement page="Curriculum Vitae" to="cv"/>
    <NavElement page="Resources" />
    <NavElement page="Writings" />
    <NavElement page="Photography" />
  </div>
);

export default SiteNav;
