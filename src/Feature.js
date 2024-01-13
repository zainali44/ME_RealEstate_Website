import React from "react";
import { Button } from "@material-tailwind/react";

import {
    MapPinIcon,
    MagnifyingGlassIcon,
    ArrowDownCircleIcon,
} from "@heroicons/react/24/outline";

import Lakeshare from "./lakeshare.jpg";


export default function FeaturedProperties() {
    return (
        <div className="bg-white">
            <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full"
                src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
            />
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    <span className="block tracking-normal">Featured properties</span>
                    <span className="block text-gray-600 text-sm tracking-wider font-medium mt-2 sm:mt-0">
                        Check out the latest featured properties.
                    </span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md">
                        <Button variant="text" className="flex items-center gap-2">
                            Explore More{" "}
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
                        </Button>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="relative lg:row-start-1 lg:col-start-2">
                            <svg
                                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect
                                            x={0}
                                            y={0}
                                            width={4}
                                            height={4}
                                            className="text-gray-200"
                                            fill="currentColor"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    width={404}
                                    height={384}
                                    fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                                />
                            </svg>
                            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                                <figure>
                                    {/* lower the height of the image to fit the content */}
                                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                                        <img
                                            className="rounded-lg shadow-lg object-cover object-center"
                                            src={Lakeshare} alt="Whiskey being poured into glass" />
                                    </div>
                                </figure>
                            </div>
                        </div>
                        <div className="mt-8 lg:mt-0">
                            <div className="text-base max-w-prose mx-auto lg:max-w-none">
                                <p className="text-lg text-gray-500">
                                    <span className="text-base font-semibold uppercase tracking-wide text-gray-600">
                                        22800-22840 Lake Shore Blvd | Euclid OH 44123
                                    </span>

                                </p>
                                <h2 className="mt-4 text-3xl leading-none font-bold text-gray-900 sm:text-4xl">
                                    LAKESHORE PLAZA
                                </h2>
                            </div>
                            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                                <Button variant="outlined" className="flex items-center gap-3" size="sm" color="indigo" onClick={() => window.open("https://firebasestorage.googleapis.com/v0/b/mewebsite-cf244.appspot.com/o/Lakeshore%20OM%20-%20Chaney%20Investment%20Team%20copy.pdf?alt=media&token=4a66a334-084e-4382-9410-f7b0e1267874")}>
                                    Download Brochure{" "}
                                    <ArrowDownCircleIcon className="h-5 w-5" />
                                </Button>
                                <p className="mt-8 text-sm text-gray-700">
                                    For more information, please <span 
                                    onClick={() => window.open('/contactus')}
                                    className="text-green-500 font-semibold cursor-pointer hover:text-green-600">
                                        contact us</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="relative lg:row-start-1 lg:col-start-2">
                            <svg
                                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect
                                            x={0}
                                            y={0}
                                            width={4}
                                            height={4}
                                            className="text-gray-200"
                                            fill="currentColor"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    width={404}
                                    height={384}
                                    fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                                />
                            </svg>
                            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                                <figure>
                                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                                        <img
                                            className="rounded-lg shadow-lg object-cover object-center"
                                            src="https://firebasestorage.googleapis.com/v0/b/mewebsite-cf244.appspot.com/o/images%2FScreenshot%202023-11-25%20153229.png?alt=media&token=27289d6d-4221-4860-8815-f7b215b4ab5a" alt="Whiskey being poured into glass" />
                                    </div>
                                </figure>
                            </div>
                        </div>
                        <div className="mt-8 lg:mt-0">
                            <div className="text-base max-w-prose mx-auto lg:max-w-none">
                                <p className="text-lg text-gray-500">
                                    <span className="text-base font-semibold uppercase tracking-wide text-gray-600">
                                        902-914 N Calbe Rd, Lima, OH 45805
                                    </span>

                                </p>
                                <h2 className="mt-4 text-3xl leading-none font-bold text-gray-900 sm:text-4xl">
                                    LIMA CENTER
                                </h2>
                            </div>
                            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                                <Button variant="outlined" className="flex items-center gap-3" size="sm" color="indigo" onClick={() => window.open("https://firebasestorage.googleapis.com/v0/b/mewebsite-cf244.appspot.com/o/Lima%20OM%20-%20Chaney%20Investment%20Team.pdf?alt=media&token=208b54d9-f4a2-447a-be23-05a4f2975aba")}>
                                    Download Brochure{" "}
                                    <ArrowDownCircleIcon className="h-5 w-5" />
                                </Button>
                                <p className="mt-8 text-sm text-gray-700">
                                    For more information, please <span 
                                    onClick={() => window.open('/contactus')}
                                    className="text-green-500 font-semibold cursor-pointer hover:text-green-600">
                                        contact us</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="relative lg:row-start-1 lg:col-start-2">
                            <svg
                                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect
                                            x={0}
                                            y={0}
                                            width={4}
                                            height={4}
                                            className="text-gray-200"
                                            fill="currentColor"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    width={404}
                                    height={384}
                                    fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                                />
                            </svg>
                            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                                <figure>
                                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                                        <img
                                            className="rounded-lg shadow-lg object-cover object-center"
                                            src="https://tenantbase.imgix.net/building2/16/197116/building-230831-040557.png?auto=enhance%2Ccompress%2Cformat&h=600&w=1000&s=241c587ba7685a8da73425a4bf70b730" alt="Whiskey being poured into glass" />
                                    </div>
                                </figure>
                            </div>
                        </div>
                        <div className="mt-8 lg:mt-0">
                            <div className="text-base max-w-prose mx-auto lg:max-w-none">
                                <p className="text-lg text-gray-500">
                                    <span className="text-base font-semibold uppercase tracking-wide text-gray-600">
                                    500 W Aurora Rd (SR-82) | Sagamore Hills, OH 44067
                                    </span>

                                </p>
                                <h2 className="mt-4 text-3xl leading-none font-bold text-gray-900 sm:text-4xl">
                                    SAGAMORE SQUARE
                                </h2>
                            </div>
                            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                                <Button variant="outlined" className="flex items-center gap-3" size="sm" color="indigo" onClick={() => window.open("https://firebasestorage.googleapis.com/v0/b/mewebsite-cf244.appspot.com/o/Sagamore%20OM%20-%20Chaney%20Investment%20Team.pdf?alt=media&token=c8ddaed8-4910-435b-96b3-e7ad3d7b3fb5")}>
                                    Download Brochure{" "}
                                    <ArrowDownCircleIcon className="h-5 w-5" />
                                </Button>
                                <p className="mt-8 text-sm text-gray-700">
                                    For more information, please <span
                                    onClick={() => window.open('/contactus')}
                                     className="text-green-500 cursor-pointer hover:text-green-600">
                                        contact us</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}