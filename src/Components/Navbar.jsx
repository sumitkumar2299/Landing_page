import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "./Image/logo.png";
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { useState } from "react";



function Navbar() {

  const [scroll,Setscroll] = useState(false)

  useEffect(()=>{
    const handleScroll = () => {
      
      if (window.scrollY > 50) {
        Setscroll(true);
        console.log("navbar state: scrolled")
      } else {
        Setscroll(false);
        
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  },[])


  function HandleMenu(){
    console.log("handling menu");
  }




  return (
    <>

    <div  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scroll ? "bg-[#571f12]" : "bg-transparent"
        }`}>


<div className="flex justify-between ">

<div className="">
<img
      className=" h-16 max-w-3xl justify-start "
      src={logo}
      alt="logo"
    />
</div>

<div className=" align-top space-y-1.5">
<div className="flex justify-end px-52 space-x-5">
<div>
    <FontAwesomeIcon
      icon={faEnvelope}
      className="text-white-500 text-xl cursor-pointer text-white"
    />
    <span className="cursor-pointer text-white">abc@gmail.com</span>
  </div>
  <div>
    <FontAwesomeIcon
      icon={faPhone}
      className="text-white-500 text-xl cursor-pointer text-white"
    />
    <span className="space-x-0.5 cursor-pointer text-white">(+34)647533826</span>
  </div>
</div>
  

  <nav>
    <img src=""></img>
    <ul className="flex justify-end space-x-10 px-35">
      <li className="text-blue-500 cursor-pointer ">APARTMENTS</li>
      <li className="cursor-pointer text-white">PENTHOUSE</li>
      <li className="cursor-pointer text-white">VILLAS</li>

      
      <select className="text-white cursor-pointer" name="ES" id="#">
        <option className="bg-[#123456] cursor-pointer py-3 px-3">EN</option>
        <option className="bg-[#123456] cursor-pointer ">ES</option>
      </select>

{/* 
      <button onClick={HandleMenu} className="text-white p-3 cursor-pointer rounded-full md:hidden">
      <FontAwesomeIcon icon={faBars} className="text-2xl" />
    </button> */}
     

     
    </ul>

    
  </nav>

</div>

</div>





    </div>





































































{/* 
    <div className="flex justify-between ">

    <div className="">
    <img
          className="bg-blue-800 h-16 max-w-3xl justify-start"
          src={logo}
          alt="logo"
        />
    </div>

    <div className=" align-top space-y-1.5">
    <div className="flex justify-end px-52 space-x-5">
    <div>
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-white-500 text-xl cursor-pointer"
        />
        <span className="cursor-pointer">abc@gmail.com</span>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faPhone}
          className="text-white-500 text-xl cursor-pointer"
        />
        <span className="space-x-0.5 cursor-pointer">(+34)647533826</span>
      </div>
    </div>
      
  
      <nav>
        <img src=""></img>
        <ul className="flex justify-end space-x-10 px-35">
          <li className="text-blue-500 cursor-pointer">APARTMENTS</li>
          <li className="cursor-pointer">PENTHOUSE</li>
          <li className="cursor-pointer">VILLAS</li>
          <select name="EN" id="#">
            <option>ES</option>
            <option>EN</option>
          </select>
        </ul>
      </nav>

    </div>

    </div> */}

    
    </>
  );
}

export default Navbar;
