import React, { useState } from "react";
import logo from "./image-8.png";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
    Avatar,
    IconButton,
} from "@material-tailwind/react";

import Moshe from "./james.jpg";
import Eli from "./TeamImages/20210318_210337_2-removebg-preview.jpg";
import LongDialog from "./TeamComponets/MosheInfo.js";

import Moos from "./TeamImages/ODN12D05M22Y51-1-e1652717637786.jpg";

import Ben from "./TeamImages/Ben.jpg";

import Stephanie from "./TeamImages/Stephanie.jpg";

import Melinda from "./TeamImages/Melinda.jpg";

import Noah from "./TeamImages/Noah.jpg";

import Jamie from "./TeamImages/Jamie.jpg";

import Alex from "./TeamImages/Alex.jpg";

const people = [
    {
        name: 'ELI ADAHAN',
        role: 'CO-FOUNDER AND MANAGING PARTNER',
        imageUrl: Eli,
        content: 'Mr. Adahan is a Co-Founder and Managing Partner of ME Real Estate investment group where he jointly oversees all aspects of the firm’s investment activities and operations. Prior to co-founding ME Real Estate Mr. Adahan was a co-founder of NYC brokerage Homestead NYC responsible for investments sales, operations, and corporate strategies. In 2010 Mr Adahan founded ME Real Estate with his Brother Moshe investing in multi family communities that later grew in too student housing, Developments and Retail strip centers. Adahan has over 20 years of experience in sourcing, negotiating, structuring, financing, developing, managing properties and closing transactions in north America. Today Mr. Adahan overseas the management of over 160M portfolio while looking to expand the portfolio in to industrial logistics, Retail strip malls in appreciating markets. ',
    },

    {
        name: 'MOSHE ADAHAN',
        role: 'PRINCIPAL CO-FOUNDER',
        imageUrl: Moshe,
        content: `In 2005, Moshe began investing in NYC real estate with his brother Eli, focusing on purchasing condominium units. This 
                business venture led to the creation of ME Real Estate in 2010, directly following the subprime mortgage crisis of 2008. Since 
             its development, Moshe has been instrumental in the expansion of ME Real Estate into several cities, including Rochester, 
        Cleveland, Cincinnati, Columbus, and Indianapolis. Here at ME Real Estate, Moshe takes the lead on business development, 
        overseeing the investment, underwriting, and securing of investments, all the while focusing on the long-term goals and 
        strategies to ensure the continued growth of the company.
        Moshe began his career far from real estate, as the CEO of AC Engineering, an Israeli-based company which specializes in the 
        development of non-conventional solutions to technological challenges, primarily for the medical devices, and aerospace 
        industries. Currently, Moshe serves as a bord member, where he continues to provide innovative technology solutions.`,
    },

    {
        name: 'EMMANUEL MOOS',
        role: 'VICE PRESIDENT / INVESTOR RELATION',
        imageUrl: Moos,
        content: `
            Emmanuel started his career within the family Business of Sadev, focusing on the distribution of semi-finish stainless steel 
            products and machine parts for the car, aerospace, and electronic industries. During his employment at Sadev, Emmanuel 
            developed his own division, which he sold afer 20 years of service. 
            The company sold its products to over 50 countries worldwide and had offices in France, Switzerland, the USA, Turkey, 
            Russia, and India. Upon exiting his company in 2011, Emmanuel became a valued member of the ME team. Thanks to his 
            extensive experience and network, Emmanuel was named CFO in 2020 and currently oversees underwriting investments and 
            handles European and overseas investor relations
                    `
    },

    {
        name: 'Ben Collier',
        role: 'Senior Vice President',
        imageUrl: Ben,
        content: `
        A seasoned professional with over a decade involved with the commercial real estate industry, Ben draws from his diverse professional background to put a production-oriented twist on being a data-driven leader dedicated to continuous improvement. As Senior Vice President at ME Real Estate Companies, he works closely with the team to shape company processes, steer toward operational excellence, and drive strategic planning for ME’s growth in addition to maintaining relationships with our tenants and investment partners. As an alumnus of The Ohio State University and Hondros College, as well as an active member of esteemed organizations like IREM, ICSC, NAIOP, RLI, and AAPL, Ben's network and diverse expertise are foundational to the firm's success.`
    },
    {
        name: 'Stephanie Wehr',
        role: 'Controller',
        imageUrl: Stephanie,
        content: `
        Stephanie is responsible for all of the day-to-day financial operations of the company, including management of accounts payable/receivable, systems compliance, and other administrative tasks relating to the properties or lease compliance. Stephanie also has a large role in training the team on working within our systems, as a seasoned expert with complex property management and accounting software. She is an alumnus of Ohio University with over 15 years experience in office administration and accounting.         
        
        `
    },
    {
        name: 'Melinda McKnight',
        role: 'Paralegal and Office Administrator',
        imageUrl: Melinda,
        content: `
        Melinda focuses on tracking reporting, maximizing revenues from avenues like percentage rent, and managing collections, evictions, and other legal processes. She also focuses on various administrative tasks relating to accounts, systems, collections, lease compliance, and legal matters. Melinda has over 25 years experience in commercial real estate,with a focus on legal procedures and processes. Melinda is a certified Paralegal and member of both the Columbus Bar Association and the American Bar Association.
        `
    },
    {
        name: 'Aya Adahan',
        role: 'Payroll and Accounting Administrator',
        imageUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        content: `
        Aya is the liaison of our team in dealing with matters regarding payroll, such as changes of accounts, adjustments to withholding, and similar. She also assists in creating reconciliations for Maintenance, Taxes, and Insurance for billing/crediting our tenants and assists the Controller with complex accounting transactions. Aya is an alumnus of The Open University of Israel with over 15 years of experience in and adjacent to the real estate industry.
        `
    },
    {
        name: 'Alexander Vaughn',
        role: 'Asset Manager',
        imageUrl: Alex,
        content: `
        Alex is primarily responsible for handling all of the site contacts, vendors, contracted services, work orders, inspections, projects, preventative maintenance, and all other facets of the physical condition of the properties. Alex is an alumnus of Ohio University and McNally Smith with almost a decade of experience in asset management and also serves on the Deerfield Township Steering Committee.        `
    },
    {
        name: 'Noah Yoder',
        role: 'Junior Vice President - Brokerage',
        imageUrl: Noah,
        content: `
        Noah leads our brokerage team on marketing and leasing of vacancies within our portfolio, with a focus on retail spaces. Drawing from his experience as a co-founder of a real estate brokerage, he is one of ME’s key players relating to acquisition and disposition of assets. Noah is an alumnus of The Ohio State University and has over 5 years of experience in commercial real estate brokerage and transactions.`    },
    {
        name: 'Jamie Ungar',
        role: 'Leasing and Marketing Coordinator',
        imageUrl: Jamie,
        content: `
        Jamie is the face of ME’s online presence, focusing on creation and optimization of all aspects of our online marketing from property listings to social media. She also assists in facilitating new leases, lease administration, and beautifying our brand. Jamie has professional experience in social media marketing, graphic design, and market analysis. She is an alumnus of The Ohio State University and brings a fresh perspective to real estate from her background in consumer and market analytics. `    },
    // Add other people data here...
];

export default function Team() {
    const [open, setOpen] = useState(Array(people.length).fill(false)); // Array of open states

    const handleOpen = (index) => {
        const newOpenState = [...open];
        newOpenState[index] = !newOpenState[index];
        setOpen(newOpenState);
    };

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our leadership team has decades of experience in the real estate industry. They come from a diverse set of backgrounds, but have one thing in common: a passion for building a better future for everyone.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person, index) => (
                        <li key={person.name}>
                            <a onClick={() => handleOpen(index)} className="space-y-2 hover:opacity-75 cursor-pointer">
                                <div className="relative pb-2/3 shadow-md">
                                    <img className="absolute object-cover w-full h-full rounded-lg"
                                    src={person.imageUrl} alt={person.name} />
                                </div>
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full border-2 border-dotted border-indigo-400" src={person.imageUrl} alt={person.name} />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-xs uppercase font-semibold leading-6 text-indigo-600">{person.role}</p>
                                    </div>
                                </div>
                            </a>
                            <Dialog size="lg" open={open[index]} handler={() => handleOpen(index)}>
                                <DialogHeader className="flex flex-row justify-between items-center mx-4">
                                    <div className="flex flex-col items-center gap-x-6">
                                        <div className="flex items-center gap-x-6">
                                            <Avatar
                                                src={person.imageUrl}
                                                size="sm"
                                                color="indigo"
                                                withBorder={true}
                                                className="p-0.5 w-24 h-24 rounded-full sm:w-24 sm:h-24"
                                            />
                                            <div>
                                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                                <p className="text-sm font-semibold uppercase leading-6 text-indigo-600">{person.role}</p>
                                            </div>
                                        </div>
                                    </div>


                                    <IconButton
                                        color="blue-gray"
                                        size="sm"
                                        variant="text"
                                        onClick={() => handleOpen(index)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            className="h-5 w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </IconButton>
                                </DialogHeader>
                                <DialogBody divider className="h-[25rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                    <Typography className="text-gray-700 text-md mt-4 font-light">
                                        {person.content}
                                    </Typography>
                                </DialogBody>
                                <DialogFooter className="space-x-2 justify-center">
                                    <img className="h-10"
                                        src={logo} alt={person.name} />

                                </DialogFooter>
                            </Dialog>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
