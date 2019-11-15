import React from "react";

import styles from "./DefaultLayout.css"
import SiteHeader from "../../components/SiteHeader/SiteHeader.jsx";
import SiteFooter from "../../components/SiteFooter/SiteFooter.jsx";

const DefaultLayout = (props) => (
  <div>
    <SiteHeader />
    <main className={styles.mainContentWrapper}>
      {props.children}
    </main>
    <SiteFooter />
  </div>
);

export default DefaultLayout;
