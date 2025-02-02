import React from 'react'
import logo from './Image/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {

  const scrollToTop = ()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  }
  
  return (
   
    
  
    <>
    <div className='max-w-screen h-[30vh] bg-[#262424] flex justify-around py-25'>

        <h2 className='text-white'>Higueron Resort Real estate &copy;. Todos los derechos reservados.</h2>
        <img className='h-16 max-w-3xl cursor-pointer' src={logo}></img>

        <button
          onClick={scrollToTop}
          className="bg-white text-gray p-3 rounded-full cursor-pointer transition-all"
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-2xl" />
        </button>

    </div>

    
    </>
  )
}


export default Footer
