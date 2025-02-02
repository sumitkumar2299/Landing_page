import React, { useEffect, useState } from "react";
import banner1 from "./Image/banner1.jpg";
import banner2 from "./Image/banner2.jpg";



function ImageChanger() {
  const images = [banner1, banner2];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

      
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>


   
      <div className=" w-full h-[70vh] m-auto overflow-hidden relative  ">
        <img
          className="w-full h-full object-cover absolute transition-opacity duration-1000 ease-in-out opacity-0 top-0 left-0 "
          src={images[(currentIndex + 1) % images.length]}
          alt="banner"
          
        />
        <img
          className="w-full h-full top-0 left-0 transition-opacity duration-1000 ease-in-out"
          src={images[currentIndex]}
          alt="banner"
          
        />

        
      </div>
    </>
  );
}

export default ImageChanger;
