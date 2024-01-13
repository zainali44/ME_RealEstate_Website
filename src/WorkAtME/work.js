import React from "react";
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { JobDialog } from "./form";

function JobPortal() {
    return (
        <div className="bg-white">
            <img
                className="h-96 w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="nature image"
            />

            <div className="mt-10 text-center">
                <h1 className="text-2xl font-bold text-gray-800">Work with Us!</h1>
                <p className="mt-4 text-lg text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.
                </p>
            </div>

            {/* Prominent Job Description */}
            <div className="bg-white p-6 mx-10 my-8 rounded-lg ring-1 ring-gray-300 lg:mx-60 lg:my-16 sm:max-w-xl sm:mx-auto">
                <h3 className="text-xl font-semibold text-indigo-800">Real Estate Agent</h3>
                <p className="mt-2 text-gray-700">Full-time · Remote</p>
                <p className="mt-4 text-gray-700">Apply by: <span className="text-red-700">August 25, 2023</span></p>
                <p className="mt-2 text-gray-700">Application for: <span className="text-gray-700">Backend Developer</span></p>
                <p className="mt-2 text-gray-700">Salary expectation: <span className="text-gray-700">$120,000</span></p>
                <p className="mt-4 text-gray-700">Requirements:</p>
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eius sed sequi culpa deserunt. Dicta minus voluptate ex nemo! Quisquam, voluptas, deserunt corporis eius similique pariatur tempora magni dicta tempore.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eius sed sequi culpa deserunt. Dicta minus voluptate ex nemo! Quisquam, voluptas, deserunt corporis eius similique pariatur tempora magni dicta tempore.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eius sed sequi culpa deserunt. Dicta minus voluptate ex nemo! Quisquam, voluptas, deserunt corporis eius similique pariatur tempora magni dicta tempore.</li>
                </ul>
                <p className="mt-4 text-gray-700">Supporting documents:</p>
                <ul className="list-none mt-2">
                    <li className="flex items-center justify-between py-2">
                        <div className="flex items-center">
                            <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            <span className="ml-2 text-sm font-medium text-gray-800">Job_Details.pdf</span>
                        </div>
                        <a href="#" className="text-indigo-600 hover:text-indigo-500">Download</a>
                    </li>
                </ul>
                <p className="mt-4 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</p>

                {/* Apply Now Button */}
                <div className="mt-6 text-center sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <a href="#" className="inline-block px-6 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg">
                        Apply now
                    </a>
                </div>
            </div>
        </div>
    );
}

export default JobPortal;
