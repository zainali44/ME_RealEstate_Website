import React, { useState, useEffect, useRef } from "react";
import CoverPage from "./cover.js";
import StatsNumber from "./stats.js";
import WorkingLocation from "./workinglocation.js";
import AssetsClasses from "./AssetsClasses.js";
import Example from "./Barchart.js";

function Home() {
  const [isCoverPageVisible, setIsCoverPageVisible] = useState(false);
  const [isStatsNumberVisible, setIsStatsNumberVisible] = useState(false);
  const [isWorkingLocationVisible, setIsWorkingLocationVisible] = useState(false);
  const [isAssetsClassesVisible, setIsAssetsClassesVisible] = useState(false);
  const [isExampleVisible, setIsExampleVisible] = useState(false);

  const coverPageRef = useRef(null);
  const statsNumberRef = useRef(null);
  const workingLocationRef = useRef(null);
  const assetsClassesRef = useRef(null);
  const exampleRef = useRef(null);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        switch (entry.target) {
          case coverPageRef.current:
            setIsCoverPageVisible(true);
            break;
          case statsNumberRef.current:
            setIsStatsNumberVisible(true);
            break;
          case workingLocationRef.current:
            setIsWorkingLocationVisible(true);
            break;
          case assetsClassesRef.current:
            setIsAssetsClassesVisible(true);
            break;
          case exampleRef.current:
            setIsExampleVisible(true);
            break;
          default:
            break;
        }
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (coverPageRef.current) observer.observe(coverPageRef.current);
    if (statsNumberRef.current) observer.observe(statsNumberRef.current);
    if (workingLocationRef.current) observer.observe(workingLocationRef.current);
    if (assetsClassesRef.current) observer.observe(assetsClassesRef.current);
    if (exampleRef.current) observer.observe(exampleRef.current);

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <div ref={coverPageRef} className={`animate ${isCoverPageVisible ? "visible" : ""}`}>
        <CoverPage />
      </div>
      <div ref={statsNumberRef} className={`animate ${isStatsNumberVisible ? "visible" : ""}`}>
        <StatsNumber />
      </div>
      <div ref={workingLocationRef} className={`animate ${isWorkingLocationVisible ? "visible" : ""}`}>
        <WorkingLocation />
      </div>
      <div ref={assetsClassesRef} className={`animate ${isAssetsClassesVisible ? "visible" : ""}`}>
        <AssetsClasses />
      </div>
      <div ref={exampleRef} className={`animate ${isExampleVisible ? "visible" : ""}`}>
        <Example />
      </div>
    </div>
  );
}

export default Home;
