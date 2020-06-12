import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./styles";

const cx = classNames.bind(styles);

const Hamburger = (props) => (
    <button
        onClick={props.hamburgerFn}
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

Hamburger.propTypes = {
    isDrawerOpen: PropTypes.bool.isRequired,
    hamburgerFn: PropTypes.func.isRequired,
};

export default Hamburger;
