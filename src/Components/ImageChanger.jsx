import React, { useEffect, useState } from 'react'
import banner1 from "./Image/banner1.jpg"
import banner2 from "./Image/banner2.jpg"

function ImageChanger() {

    const images = [banner1,banner2]
    const[currentIndex,setCurrentIndex] = useState(0)
    useEffect(()=>{

        const interval = setInterval(()=>{
            setCurrentIndex((prevIndex) => (prevIndex+1)%images.length)

            return() => clearInterval(interval)

        },4000)

    },[])
  return (
   <>
   <div className=' w-full h-[60vh] m-auto overflow-hidden  '>
   <img className='w-full h-full top-0 left-0 ' src={images[(currentIndex + 1) % images.length]} alt='banner'/>
   <img className='w-full h-full top-0 left-0' src={images[currentIndex]} alt='banner'/>

   <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 px-6 py-3 z-10">Apartments
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis aut minus praesentium repellendus inventore non recusandae explicabo error, modi maxime omnis laboriosam culpa voluptatum ducimus, consectetur sequi, aspernatur delectus temporibus?
    Rerum vitae animi voluptates consequatur. Distinctio unde minus cumque? Impedit necessitatibus, natus reprehenderit ducimus delectus quisquam est ad cum eum inventore vitae animi quasi! Quidem reiciendis dolor optio fuga beatae?
    Id in quos recusandae aspernatur non asperiores soluta, minus nostrum, enim aperiam, voluptate molestias consectetur! Minima incidunt non dolore corporis impedit consequatur saepe vel, voluptatem beatae ex minus pariatur vero!
    Quos dolor hic recusandae facere labore molestiae nisi omnis eveniet, ex aliquam excepturi id voluptas. Molestiae natus dignissimos ducimus illo minus repellat aliquid asperiores error, hic veritatis ad ut quidem?
    Aliquid magnam sit, similique sed necessitatibus deleniti sapiente rerum. Nam ipsum maxime, ut fugiat aperiam voluptatem iusto saepe illum eligendi, iure repellat quas, nemo obcaecati consequatur dolor veniam architecto eveniet!
    Sequi minus, eum nobis fugit autem, eos error modi quisquam cum sapiente iusto consequuntur aspernatur, veritatis totam eius temporibus amet architecto inventore molestias quaerat consequatur laboriosam aliquam? Numquam, voluptates nulla!
    Consequuntur repellat, doloremque laudantium sapiente dicta quo nemo et velit consequatur possimus voluptatibus similique aliquam sint sunt ducimus vitae odit laboriosam in. Dolor maxime consequatur magni? Cumque, adipisci. Ducimus, debitis?
    Corporis, nisi architecto dicta sunt nemo itaque, placeat deleniti veniam vel molestias, aspernatur porro voluptatem tempora aut adipisci ex dignissimos accusantium temporibus explicabo quis inventore at molestiae? Impedit, vero earum?
    Magnam dicta placeat ad recusandae minima sapiente, adipisci asperiores repellat, nisi fugiat nesciunt. Quis, repellendus vitae! Quasi quae, natus facere sint libero aliquam deleniti quia dignissimos et nesciunt. Laborum, beatae!
    At corporis perspiciatis consequatur sit natus animi voluptas aut voluptatibus omnis magnam debitis aliquam quibusdam hic eum sunt adipisci obcaecati ratione, aspernatur recusandae vero tempora officia ipsa asperiores nobis. Beatae.
   </h1>

   </div>
   
   </>
  )
}

export default ImageChanger