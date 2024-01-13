import React, { useState } from "react";
import newYorkImage from "./GEOGRAPHY.png";

export default function WorkingLocation() {
  const [backgroundPosition, setBackgroundPosition] = useState("center");
  const [backgroundSize, setBackgroundSize] = useState("cover");

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const container = e.target;

    const xPos = (clientX / container.offsetWidth) * 100;
    const yPos = (clientY / container.offsetHeight) * 100;

    setBackgroundPosition(`${xPos}% ${yPos}%`);
  };

  const handleMouseLeave = () => {
    setBackgroundPosition("center");
  };

  const handleZoom = (factor) => {
    // Adjust the background size based on the zoom factor
    const currentSize = parseInt(backgroundSize);
    const newSize = currentSize + factor;
    
    if (newSize >= 80 && newSize <= 200) {
      setBackgroundSize(`${newSize}%`);
    }
  };

  const handleDrag = (e) => {
    // Allow the background image to be draggable within its container
    e.preventDefault();
    const container = e.target;
    const xPos = (e.clientX / container.offsetWidth) * 100;
    const yPos = (e.clientY / container.offsetHeight) * 100;

    setBackgroundPosition(`${xPos}% ${yPos}%`);
  };

  return (
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-[#105065]">Our Working Locations</h1>
        <p className="mt-5 block text-base font-normal text-[#105065]">
          ME Real Estate invests exclusively in geographic regions where we have a local presence.
        </p>
        <div className="mt-10">
          <div className="relative w-[1000px] h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${newYorkImage})`,
                backgroundPosition,
                backgroundSize,
              }}
            />
          </div>
        </div>
      </div>
  );
}
