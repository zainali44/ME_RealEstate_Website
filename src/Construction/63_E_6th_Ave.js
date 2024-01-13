import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Input, // Add Input component for the search bar
  Spinner,
    Card,
    CardHeader,
    CardBody,
    CardFooter,

} from "@material-tailwind/react";
import {
  MapPinIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../db";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { set } from "mongoose";


export default function E63Ave() {
    //Images Gallery

    const [ImagesData, setImagesData] = useState([]);

    const db = getFirestore(app);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "63 E 6th Ave"));
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            setImagesData(data);
        };
        fetchData();
    }
    , []);

    return (
        <div className="bg-white">
            {/* //cover photo */}
            <div className="relative h-96 bg-gray-900">
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://firebasestorage.googleapis.com/v0/b/mewebsite-cf244.appspot.com/o/883cb7ae-7caf-45e8-a30c-9c654b1d55ba-d49e0bd5-7051-4742-9a86-28f594040a8a.JPG?alt=media&token=d7927a97-4826-4a98-a256-1e3b03179b56"
                    alt=""
                />
                <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
                <div className="relative flex items-center justify-center h-full px-8">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-semibold text-center text-white uppercase md:text-5xl">
                            63 E 6th Ave
                        </h1>
                    </div>
                </div>
            </div>
                
                {/* //description */}   
                <div className="py-20">
                    <div className="flex flex-col items-center">
                        <div className="block w-2/3 rounded-full text-center">
                            <h1 className="text-2xl font-bold text-green-500 mb-4 shadow-2xl">
                                DECRIPTION OF THE PROJECT
                            </h1>
                            <p className="text-gray-600 text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                                necessitatibus incidunt ut officiis explicabo inventore. Lorem
                                ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                                necessitatibus incidunt ut officiis explicabo inventore.
                            </p>
                        </div>
                    </div>
                </div>
            <div className="flex flex-wrap justify-center">
                {ImagesData.map((image, index) => (
                    <div className="h-80 w-80 overflow-hidden rounded-lg mx-4 my-4">
                        <div className="relative">
                            <img
                                src={image.url}
                                className="w-full object-cover rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                                alt="gallery"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}