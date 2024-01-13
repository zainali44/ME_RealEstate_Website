import React from "react";

import Cover from "./cover"; 

import Example from "./page";

import PageDown from "./pagedown";

import {Pastwork} from "./pastwork";


export default function Construction() {
    return (
        <div className="bg-white">
            <Cover />
            <Example />
            <PageDown />
            <Pastwork />
        </div>
    );
}
