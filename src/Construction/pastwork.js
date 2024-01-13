import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
} from "@material-tailwind/react";

import { useNavigate } from 'react-router-dom'


const includedFeatures = [
    {
        img: "https://firebasestorage.googleapis.com/v0/b/mewebsite-cf244.appspot.com/o/e544c4a6-292e-4f06-94b7-8a1dc055df9d-IMG_0062.JPG?alt=media&token=eda1ea71-40a4-4ed1-94bc-28f7481d4b61",
        title: "1555 N 4th Street",
        page : "/1555NStreet",
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/mewebsite-cf244.appspot.com/o/6cf074d1-65e5-48af-92ef-53c78e5ebeff-C%20-%20298%20Wilson%20Unit%20B016.jpg?alt=media&token=2eb12fea-7c2e-4f22-b274-7ce2f4a1c870",
        title: "298 Willson",
        page : "/298_Willson",
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/mewebsite-cf244.appspot.com/o/fd665931-ccbd-49f0-9939-e2cdc699c9ad-_DSC0081.jpg?alt=media&token=609d45a1-05b6-4f0a-98a5-08bd64e4fe97",
        title: "313 Chittenden",
        page : "/313_Chittenden",
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/mewebsite-cf244.appspot.com/o/883cb7ae-7caf-45e8-a30c-9c654b1d55ba-d49e0bd5-7051-4742-9a86-28f594040a8a.JPG?alt=media&token=d7927a97-4826-4a98-a256-1e3b03179b56",
        title: "63 E 6th Ave",
        page : "/63_E_6th_Ave",
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/mewebsite-cf244.appspot.com/o/f9ea5c9f-4c7c-4efd-95b0-bdd3b2455b56-A_4th_010.jpg?alt=media&token=2b6070d2-220c-4115-9778-40c2b8015e92",
        title: "USCC",
        page : "/USCC",
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/mewebsite-cf244.appspot.com/o/6cf074d1-65e5-48af-92ef-53c78e5ebeff-C%20-%20298%20Wilson%20Unit%20B016.jpg?alt=media&token=2eb12fea-7c2e-4f22-b274-7ce2f4a1c870",
        title: "298 Willson",
        page : "/298_Willson",
    }
];

export function Pastwork() {

    const navigate = useNavigate();

    return (
        <div className="bg-white">
            <div className="flex flex-col items-center py-20">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-semibold text-indigo-500 mb-4">
                        Sample Projects
                    </h1>
                    <p className="text-gray-600 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                        necessitatibus incidunt ut officiis explicabo inventore.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 space-y-4">
                    {includedFeatures.map((feature, index) => (
                        <Card className="mt-6 w-96">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <img
                                    src={feature.img}
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    {feature.title}
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <a className="inline-block" onClick={() => navigate(feature.page)}>
                                    <Button size="sm" variant="text" className="flex items-center gap-2"
                                        
                                    >
                                        Learn More
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </Button>
                                </a>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}