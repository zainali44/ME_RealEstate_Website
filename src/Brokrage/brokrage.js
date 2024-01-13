import React from "react";

import Cover from "./cover"; 

import BrokragePage from "./page";

import Example from "./page2";

export default function Brokrage() {
    return (
        <div className="bg-white">
            <Cover />
            <BrokragePage />
            <Example />
        </div>
    );
}
