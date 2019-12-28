import React from "react";
import classNames from "classnames/bind";

import styles from "./styles";
import SiteTitle from "Components/SiteTitle";
import SiteNav from "Components/SiteNav";

const cx = classNames.bind(styles);

class SiteHeader extends React.Component {
    constructor() {
        super();
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
                withShadow: !this.state.topOfPage},
            )}>
                <SiteTitle />
                <SiteNav />
            </header>
        );
    }
}

export default SiteHeader;
