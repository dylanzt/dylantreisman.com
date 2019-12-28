import React from "react";

import styles from "./styles";
import NavElement from "../NavElement/NavElement";

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
