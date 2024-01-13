import React, {useEffect, useState, CSSProperties} from "react";
import CircleLoader from "react-spinners/CircleLoader";
import RiseLoad from "react-spinners/PropagateLoader";
import './Preloader.css';

import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";
 
export default function Preloader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(true)
    }, 3000)
  }, [])
 
  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <RiseLoad className="mt-2 font-semibold text-black sm:text-sm">Loading...</RiseLoad>
      </div>
    </div>
      {/* <CircleLoader color="#000000" className="ring-loader-css"/> */}
    </>
  );
}