import React from "react";

import styles from "./SiteHeader.css";
import SiteTitle from "../SiteTitle/SiteTitle.jsx";
import SiteNav from "../SiteNav/SiteNav.jsx";

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
        const currentlyTop = document.body.getBoundingClientRect().y >= topThreshold;
        currentlyTop === this.state.topOfPage || this.setState({
            topOfPage: currentlyTop,
        });
    }

    render() {
        return (
            <header className={this.state.topOfPage ? styles.root : styles.rootWithShadow}>
                <SiteTitle />
                <SiteNav />
            </header>
        );
    }
}

export default SiteHeader;
