import React from "react";
import classNames from "classnames/bind";

import styles from "./styles";
import { hamburgerProps } from "src/propTypes";

const cx = classNames.bind(styles);

const Hamburger = (props) => (
    <button
        onClick={props.toggleDrawer}
        className={cx({
            hamburger: true,
            close: props.isDrawerOpen,
        })}
    >
        <span className={styles.hamburgerText}>
            <span className={styles.screenReaderText}>Open Menu</span>
        </span>
    </button>
);

Hamburger.propTypes = hamburgerProps;

export default Hamburger;
