import React from 'react'
import card1 from "./Image/card1.jpg"
import card2 from "./Image/card2.jpg"
import card3 from "./Image/card3.jpg"
import card5 from "./Image/card5.jpg"
import card4 from "./Image/card4.webp"
import card6 from "./Image/card6.webp"

function Card({place = "valley collection"}) {
  return (
    <>

    <div className='flex max-w-screen gap-2 h-[60vh] '>
      
    <div className='ml-18 mt-20 mr-6 cursor-pointer hover:bg-amber-50'>
    <img className='max-w-50 h-40 ' src = {card1}></img>
    <div>
    <h1 className='font-mono text-xl px-1 mt-7 text-[#123456] cursor-pointer'>Valley Collection</h1>
    <button className='text-center px-13 mt-7 py-1 pb-1 cursor-pointer hover:bg-amber-900 text-white bg-[#123456]'>MORE INFO</button>
    </div>
   
    </div>
    <div className='mt-20 mr-6 cursor-pointer hover:bg-amber-50'>
    <img className='max-w-50 h-40 ' src = {card2}></img>
    <div>
    <h1 className='font-mono text-xl px-1 mt-7 text-[#123456] cursor-pointer'>16+ Collection</h1>
    <button className='text-center px-13 mt-7 py-1 pb-1 cursor-pointer hover:bg-amber-900 text-white bg-[#123456]'>MORE INFO</button>
    </div>
   
    </div>

    <div className='mt-20 mr-6 cursor-pointer hover:bg-amber-50'>
    <img className=' max-w-50 h-40 ' src = {card3}></img>
    <div>
    <h1 className='font-mono text-xl px-1 mt-7 text-[#123456] cursor-pointer'>North Residences</h1>
    <button className='text-center px-13 mt-7 py-1 pb-1 cursor-pointer hover:bg-amber-900 text-white bg-[#123456]'>MORE INFO</button>
    </div>
   
    </div>

    <div className='mt-20 mr-6 cursor-pointer hover:bg-amber-50'>
    <img className='max-w-50 h-40 ' src = {card4}></img>
    <div>
    <h1 className='font-mono text-xl px-1 mt-7 text-[#123456] cursor-pointer'>Waterfall Residences</h1>
    <button className='text-center px-13 mt-7 py-1 pb-1 cursor-pointer hover:bg-amber-900 text-white bg-[#123456]'>MORE INFO</button>
    </div>
   
    </div>

    <div className='mt-20 mr-6 cursor-pointer hover:bg-amber-50'>
    <img className='max-w-50 h-40 ' src = {card5}></img>
    <div>
    <h1 className='font-mono text-xl px-1 mt-7 text-[#123456] cursor-pointer'>South Residence</h1>
    <button className='text-center px-13 mt-7 py-1 pb-1 cursor-pointer hover:bg-amber-900 text-white bg-[#123456]'>MORE INFO</button>
    </div>
   
    </div>

 <div className='mt-20 mr-6 cursor-pointer hover:bg-amber-50'>
    <img className=' max-w-50 h-40 ' src = {card6}></img>
    <div>
    <h1 className='font-mono text-xl px-1 mt-7 text-[#123456] cursor-pointer'>Lomas del Higueron</h1>
    <button className='text-center px-13 mt-7 py-1 pb-1 cursor-pointer hover:bg-amber-900 text-white bg-[#123456]'>MORE INFO</button>
    </div>
   
     </div> 


    </div>

    </>
  )
}

export default Card