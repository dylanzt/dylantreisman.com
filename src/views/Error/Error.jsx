import React from "react";

import styles from "./Error.css";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout.jsx";

const Error = (props) => (
    <DefaultLayout>
        <h1>Oops...</h1>
        <p>This page doesn't exist, or has been deleted.</p>
    </DefaultLayout>
);

export default Error;
