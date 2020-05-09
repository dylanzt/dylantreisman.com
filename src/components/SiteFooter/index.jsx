import React from "react";

import styles from "./styles";

const SiteFooter = () => (
    <footer className={styles.root}>
        <div className={styles.mainFooter}>
            Hello world
        </div>
        <div className={styles.subFooter}>
            &copy; 2019-{(new Date()).getFullYear()} Dylan Treisman
            <a href="#top">Back to top</a>
        </div>
    </footer>
);

export default SiteFooter;
