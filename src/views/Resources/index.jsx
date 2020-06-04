import React from "react";
import { Helmet } from "react-helmet";

import DefaultLayout from "Layouts/DefaultLayout";

const Resources = () => (
    <DefaultLayout>
        <Helmet>
            <title>Resources</title>
            <meta
                name="description"
                content="Assorted technical learning and research materials
                    that I have collected over the years."
            />
        </Helmet>
        This page will serve as a repository for assorted learning
        and research materials that I have collected.
    </DefaultLayout>
);

export default Resources;
