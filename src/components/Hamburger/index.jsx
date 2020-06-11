import React from "react";
import classNames from "classnames/bind";

import styles from "./styles";

const cx = classNames.bind(styles);

const Hamburger = () => (
    <button className={cx({
        hamburger: true,
        close: true,
    })}>
        <span className={styles.hamburgerText}>
            <span className={styles.screenReaderText}>Open Menu</span>
        </span>
    </button>
);

export default Hamburger;
