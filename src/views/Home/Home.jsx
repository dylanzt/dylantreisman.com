import React from "react";

import styles from "./Home.css";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout.jsx"
import ComingSoon from "../../components/ComingSoon/ComingSoon.jsx"

const Home = () => (
  <DefaultLayout>
    <ComingSoon />
  </DefaultLayout>
);

export default Home;
