import React from "react";

export default function Cover() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden h-96">
          <img
            className="h-120 !important w-full object-cover object-center brightness-50 sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="nature image"
          />
        </div>
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Construction Services</h1>
          </div>
        </div>
      </div>
    );
}