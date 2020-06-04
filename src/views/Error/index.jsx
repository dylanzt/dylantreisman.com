import React from "react";
import { Helmet } from "react-helmet";

import DefaultLayout from "Layouts/DefaultLayout";

const Error = () => (
    <DefaultLayout>
        <Helmet>
            <title>Error</title>
            <meta
                name="description"
                content="Oops... This page doesn't exist, or has been deleted."
            />
        </Helmet>
        <h1>Oops...</h1>
        <p>This page doesn&apos;t exist, or has been deleted.</p>
    </DefaultLayout>
);

export default Error;
