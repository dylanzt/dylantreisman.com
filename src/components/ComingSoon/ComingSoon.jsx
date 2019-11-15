import React from "react";

import styles from "./ComingSoon.css";
import Lipsum from "./Lipsum.js";

const ComingSoon = () => (
  <div>
    <h1>Coming Soon...</h1>
    <p className={styles.text}>WIP</p>
    {featureFlag.lipsum && (<Lipsum className={styles.text} />)}
  </div>
);

export default ComingSoon;
