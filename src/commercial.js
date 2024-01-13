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
} from "@material-tailwind/react";
import {
  MapPinIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "./db";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { set } from "mongoose";

export default function Commercial() {
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(Array(0).fill(false));
  const [residentialData, setResidentialData] = useState([]);
  const [openDialogs, setOpenDialogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [filterLocation, setFilterLocation] = useState(""); // State for location filter
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);

  const handleMouseEnter = (index) => {
    const updatedIsHovered = [...isHovered];
    updatedIsHovered[index] = true;
    setIsHovered(updatedIsHovered);
  };

  const handleMouseLeave = (index) => {
    const updatedIsHovered = [...isHovered];
    updatedIsHovered[index] = false;
    setIsHovered(updatedIsHovered);
  };

  const db = getFirestore(app);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Commercial"));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          title: doc.data().Title,
          location: doc.data().Location,
          image: doc.data().Image,
        });
      });
      setResidentialData(data);
      setLoading(false);
      setOpenDialogs(new Array(data.length).fill(false));
      setIsHovered(new Array(data.length).fill(false)); // Initialize isHovered with the same length
    };

    fetchData();
  }, [db]);

  const handleOpenDialog = (index) => {
    const updatedOpenDialogs = [...openDialogs];
    updatedOpenDialogs[index] = !updatedOpenDialogs[index];
    setOpenDialogs(updatedOpenDialogs);
  };

  // Filter the properties based on location
  const filteredData = residentialData.filter((item) =>
    item.location.toLowerCase().includes(filterLocation.toLowerCase())
  );

  return (
    <div className="bg-white h-full">
      <img
        className="h-96 w-full object-cover"
        src="https://images.unsplash.com/photo-1534374950034-3644ddb72710?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="nature image"
      />
      {/* Add Search Bar */}

      <div className="flex flex-col items-center h-full bg-opacity-50 mt-10">
        <h1 className="text-2xl font-bold text-[#105065]">
          Commercial Properties
        </h1>
        <p className="text-gray-700 text-md mt-4 font-light">
          We have a wide range of commercial properties to suit your needs.
        </p>

        <div className="flex flex-row justify-end mt-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by location ..."
              className="border-1 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none w-96 font-light"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-20 mt-10 lg:gap-5">
          {filteredData
            .filter((item) =>
              item.location.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((item, index) => (
              <div key={item.id}>
                <div
                  className="h-80 w-96 cursor-pointer overflow-hidden transition-opacity relative rounded-sm"
                  onMouseEnter={() => handleMouseEnter(index)} // Pass the index
                  onMouseLeave={() => handleMouseLeave(index)} // Pass the index
                  onClick={() => handleOpenDialog(index)}
                >
                  {loading ? (
                    <div className="flex justify-center items-center h-full w-full">
                    <Spinner
                      color="blue"
                      size="3xl"
                      className="flex justify-center items-center"
                    />
                  </div>
                  ) : (
                    <img
                      alt="nature"
                      className="h-full w-full object-center object-cover"
                      src={item.image}
                      onLoad={() => setLoading(false)} // Set loading to false when the image is loaded
                    />

                  )
                  }

                  {isHovered[index] && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    </div>
                  )}
                </div>

                {/* Add Title and Location at the bottom of the box */}
                <div className="mt-2 flex flex-col items-center">
                  <Typography className="text-md font-semibold text-indigo-500 text-center mb-2">
                    {item.title}
                  </Typography>
                  <Typography className="block text-xs font-light text-gray-700 text-center">
                    {item.location}
                  </Typography>
                </div>
                <Dialog
                  size="xl"
                  open={openDialogs[index]}
                  handler={() => handleOpenDialog(index)}
                >
                  <DialogBody divider={true} className="p-0">
                    <img
                      alt="nature"
                      className="h-[48rem] w-full object-cover object-center"
                      src={item.image}
                    />
                  </DialogBody>
                </Dialog>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
