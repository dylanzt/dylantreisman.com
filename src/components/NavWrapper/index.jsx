import React from "react";

const menu = [
    // { name: "Home" },
    { name: "Curriculum Vitae", target: "cv" },
    { name: "Resources" },
    { name: "Writings" },
    { name: "Photography" },
];

const NavWrapper = (NavComponent) => (
    (props) => (
        <NavComponent menuList={menu} {...props} />
    )
);


export default NavWrapper;
