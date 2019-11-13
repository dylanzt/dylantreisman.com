import React from "react";

import styles from "./ComingSoon.css"

const DevNotice = () => Feature && (
<p>Build for {process.env.NODE_ENV}</p>
)

const ComingSoon = () => (
  <div>
    <h1>Coming Soon...</h1>
    <p className={styles.text}>WIP</p>
    <DevNotice />
  </div>
);

export default ComingSoon;
