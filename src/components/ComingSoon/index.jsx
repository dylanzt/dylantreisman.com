import React from "react";

import Lipsum from "./Lipsum";

const ComingSoon = () => (
    <div>
        <h1>Coming Soon...</h1>
        <p>
            Welcome to my personal website.
            It&apos;s currently under active development.
            You can view the source
            <a href="https://github.com/dylanzt/dylantreisman.com" target="_blank" rel="noopener noreferrer">
                &nbsp;here
            </a>.
        </p>
        {featureFlag.lipsum && (<Lipsum />)}
    </div>
);

export default ComingSoon;
