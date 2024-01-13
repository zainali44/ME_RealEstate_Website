import e from "cors";
import React from "react";
import OutlinedTimeline from "./Timeline";
//image with 50% brightness


export default function InvestorPortal() {

    const backgroundImageStyle = {
        backgroundImage: `url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
    };

    const backgroundFilterStyle = {
        filter: "brightness(50%)" // Adjust the percentage to change brightness
    };

    return (
        <div>
            <div className="bg-cover bg-center h-screen" style={backgroundImageStyle}>
                <div className="bg-filter" style={backgroundFilterStyle}></div>
                <div className="flex justify-center items-center h-screen">
                    <div className="text-center">
                        <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Welcome to Investor Portal</h1>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900">About ME Real Estate</h2>
                        <p className="mt-4 text-lg text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.
                        </p>
                    </div>
                    <div className="mt-20">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/globe-alt" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-todo-x-clip="evenodd" data-todo-x-description="Heroicon name: outline/globe-alt" aria-hidden="true">
                                            <path data-todo-x-description="Heroicon name: outline/globe-alt" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19s7-4 7-9.967C19 4.462 15.538 1 12 1S5 4.462 5 9.033C5 14 12 19 12 19z"></path>
                                            <path data-todo-x-description="Heroicon name: outline/globe-alt" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12s5.333 7 10 7 10-7 10-7"></path>
                                        </svg>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Competitive exchange rates</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/scale" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-todo-x-clip="evenodd" data-todo-x-description="Heroicon name: outline/scale" aria-hidden="true">
                                            <path data-todo-x-description="Heroicon name: outline/scale" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6v6a4 4 0 004 4h2v5l4-2 4 2v-5h2a4 4 0 004-4V6a4 4 0 00-4-4h-4l-4 2-4-2H3a4 4 0 00-4 4z"></path>
                                        </svg>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Propertiess at the prime locations</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900">Name of Property</h2>
                        <p className="mt-4 text-lg text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.
                        </p>
                    </div>
                    <div className="mt-20">
                        <OutlinedTimeline />
                    </div>
                </div>
            </div>
        </div>
    );
}

