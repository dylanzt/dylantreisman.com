import React from "react";
import { Link } from "react-router-dom";

import styles from "./SiteTitle.scss";

const SiteHeader = () => (
    <div className={styles.root}>
        <Link className={styles.title} to="/">
            <span className={styles.firstName}>
                Dylan
            </span>
            <span className={styles.surname}>
                Treisman
            </span>
        </Link>
    </div>
);

export default SiteHeader;
