import React from "react";

import styles from "./SiteFooter.scss";

const SiteFooter = () => (
    <footer className={styles.root}>
        &copy; 2019-{(new Date()).getFullYear()} Dylan Treisman
    </footer>
);

export default SiteFooter;
