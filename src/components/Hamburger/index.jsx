import React from "react";

import styles from "./styles";

const Hamburger = () => (
    <button className={styles.hamburger}>
        <span className={styles.hamburgerText}>
            <span className={styles.screenReaderText}>Open Menu</span>
        </span>
    </button>
);

export default Hamburger;
