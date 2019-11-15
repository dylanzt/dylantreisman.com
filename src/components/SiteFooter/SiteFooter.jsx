import React from "react";

import styles from "./SiteFooter.css";

const SiteFooter = () => (
<div className={styles.root}>
    &copy; {(new Date()).getFullYear()} Dylan Treisman
</div>
)

export default SiteFooter;
