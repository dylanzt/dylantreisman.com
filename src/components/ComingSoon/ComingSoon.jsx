import React from "react";

import styles from "./ComingSoon.css";
import Lipsum from "./Lipsum.js";

const ComingSoon = () => (
  <div>
    <h1>Coming Soon...</h1>
    <p className={styles.text}>Welcome to my personal website. It's currently under active development. You can view the source <a href="https://github.com/dylanzt/dylantreisman.com" target="_blank" rel="noopener noreferrer">here</a>.</p>
    {featureFlag.lipsum && (<Lipsum className={styles.text} />)}
  </div>
);

export default ComingSoon;
