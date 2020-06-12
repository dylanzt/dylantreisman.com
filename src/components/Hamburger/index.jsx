import React from "react";
import classNames from "classnames/bind";

import styles from "./styles";

const cx = classNames.bind(styles);
class Hamburger extends React.Component {
    constructor() {
        super();
        this.state = {
            isTrayOpen: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isTrayOpen: !state.isTrayOpen,
        }));
    }

    render() {
        return (
            <button
                onClick={this.handleClick}
                className={cx({
                    hamburger: true,
                    close: this.state.isTrayOpen,
                })}
            >
                <span className={styles.hamburgerText}>
                    <span className={styles.screenReaderText}>Open Menu</span>
                </span>
            </button>
        );
    }
}

export default Hamburger;
