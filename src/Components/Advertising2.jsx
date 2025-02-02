import React from 'react'
import logo from "./Image/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp, } from "@fortawesome/free-brands-svg-icons";



function Advertising2() {
  return (
  <>
  <div className='max-w-screen h-[50vh] bg-[#3d3d3d] flex flex-col items-center justify-center'>
  <img className='h-20 w-auto  mb-4  ' src={logo}></img>
  
  
  
  <nav>
    <ul className='flex justify-center gap-10'>
        <li className='text-blue-500 cursor-pointer'>APARTMENTS</li>
        <li className='text-white hover:text-blue-500'>PENTHOUSE</li>
        <li className='text-white hover:text-blue-500'>VILLAS</li>
        <select className='text-white hover:text-blue-500'  name="ES" id="#">
        <option >EN</option>
        <option>ES</option>
      </select>
    </ul>
  </nav>
  
  

  <div className="min-w-full h-[2px] bg-blue-500 my-6"></div>
  <br />
  

     <div className='flex justify-center gap-16'>
     <FontAwesomeIcon
          icon={faPhone}
          className="text-white-500 text-4xl cursor-pointer text-white"
        />
       <FontAwesomeIcon
          icon={faInstagram}
          className="text-white-500 text-4xl cursor-pointer text-white"
        />
       <FontAwesomeIcon
          icon={faWhatsapp}
          className="text-white-500 text-4xl cursor-pointer text-white"
        />
     </div>




  </div>
  </>
    

  )
}

export default Advertising2;