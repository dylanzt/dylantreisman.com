import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./styles";
import SiteTitle from "Components/SiteTitle";
import NavBar from "Components/NavBar";
import Hamburger from "Components/Hamburger";

const cx = classNames.bind(styles);

class SiteHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topOfPage: true,
        };
        this.adjustStyles = this.adjustStyles.bind(this);
    }

    componentDidMount() {
        document.addEventListener("scroll", this.adjustStyles);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.adjustStyles);
    }

    adjustStyles() {
        const topThreshold = -30 + 72; // Offset by header height
        const currentlyTop =
            document.body.getBoundingClientRect().y >= topThreshold;
        currentlyTop === this.state.topOfPage || this.setState({
            topOfPage: currentlyTop,
        });
    }

    render() {
        return (
            <header className={cx({
                root: true,
                withShadow: !this.state.topOfPage,
            })}>
                <div className={styles.titleWrapper}>
                    <SiteTitle />
                </div>
                <NavBar />
                <Hamburger
                    isDrawerOpen={this.props.isDrawerOpen}
                    hamburgerFn={this.props.hamburgerFn}
                />
            </header>
        );
    }
}

SiteHeader.propTypes = {
    isDrawerOpen: PropTypes.bool.isRequired,
    hamburgerFn: PropTypes.func.isRequired,
};

export default SiteHeader;
