import { CheckIcon } from '@heroicons/react/20/solid'
import { Button } from '@material-tailwind/react'
import React from 'react'
import { useState } from 'react'

import {
    Collapse,
    Card,
    Typography,
    CardBody,
} from "@material-tailwind/react";

const includedFeatures = [
    'Private forum access',
    'Member resources',
    'Entry to annual conference',
    'Official member t-shirt',
]

export default function ManagementB() {

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mx-auto max-w-5xl sm:text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-3xl">ME’s Commercial Division</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        ME’s Commercial Division originated with a vision of perfecting the management of commercial assets. Recognizing the distinctive needs of businesses and property owners, we leveled up our expertise, so we can elevate your assets.                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-x-8">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-lg font-bold text-gray-900">
                            Managing Commercial Spaces</h3>
                        <p className={`mt-6 text-base leading-7 text-gray-600 font-medium text-justify
                        ${expanded ? '' : 'h-64 overflow-hidden'}`}>
                            While the essence of real estate remains consistent, managing commercial spaces is a different ballgame. We’ve handled a diverse range of commercial properties, ensuring they meet the unique demands of the key stakeholders, owners and tenants alike.                             <br></br>
                            <br></br>
                            <span className="mt-6 text-sm leading-7 text-gray-600 font-light">
                                Our mantra revolves around the symbiotic relationship between tenant satisfaction and high-yielding investments. We understand that the commercial world thrives on this balance and we’re the first to say: we’re nothing without our tenants. By focusing on our performance-driven business model, we’ve ensured that every client we’ve worked with has seen an uptick in their asset’s value.
                                Whether it’s repurposing a dated office space or crafting a bespoke retail environment, our team is poised to add value to your asset to identify the best possible use. No task is too small or large for our team, from fresh interiors to constructing modern destinations from the ground up, we dedicate ourselves to creating a profitable product to be proud of.
                                Simplifying commercial property management is our forte, allowing you to focus on growing your business. Our communication and reporting detail are unparalleled in the industry, giving you detailed access to every line item, without the line item headache.

                            </span> </p>
                        <div className="mt-6">
                            <button onClick={toggleExpand} variant="text" className="flex items-center text-gray-500 hover:text-gray-800 focus:outline-none text-sm gap-2">
                                {expanded ? "Read Less" : "Read More"}{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                        className="w-[48rem] mt-10 max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[60rem] lg:h-[32rem] lg:w-[48rem] sm:h-[32rem] object-cover object-center"
                            src="https://images.unsplash.com/photo-1533044309907-0fa3413da946?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
