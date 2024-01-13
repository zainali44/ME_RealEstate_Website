import Team from "./Team";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";

export default function Ourteam() {
    return (
        <div className="">
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <img
                        className="h-96 w-full object-cover object-center brightness-50 sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="https://images.unsplash.com/photo-1557425529-b1ae9c141e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="nature image"
                    />
                </div>
                <div className="flex justify-center items-center h-full">
                    <div className="text-center">
                        <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Our Crew Member</h1>
                    </div>
                </div>
            </div>
            < Team />
        </div>
    );
}

