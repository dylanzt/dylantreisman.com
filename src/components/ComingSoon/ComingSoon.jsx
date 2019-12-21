import React from "react";

import styles from "./ComingSoon.css";
import Lipsum from "./Lipsum.jsx";

const ComingSoon = () => (
    <div>
        <h1>Coming Soon...</h1>
        <p className={styles.text}>
            Welcome to my personal website.
            It&apos;s currently under active development.
            You can view the source
            <a href="https://github.com/dylanzt/dylantreisman.com" target="_blank" rel="noopener noreferrer">
                &nbsp;here
            </a>.
        </p>
        {featureFlag.lipsum && (<Lipsum className={styles.text} />)}
    </div>
);

export default ComingSoon;
