import React from "react";
import photo1 from "./Image/cte.png";
import photo2 from "./Image/well-1.png";
import photo3 from "./Image/Rename.png";

function Advertising1() {
  return (
    <>
      <div className="text-white max-w-screen h-[70vh] bg-[#1c1c1b] text-center py-10 pb-59 text-[20px]">
        <h1>CERTIFICADOS</h1>

        <div className="px-75 flex justify-between py-20">
          <img src={photo1}></img>
          <img src={photo3}></img>
          <img src={photo2}></img>
         
        </div>
        <div className="flex pb-33 flex-col">
            <h3>+AGUA</h3>
            <h3>+MENTE</h3>
            <h3>+NUTRICON</h3>
            <h3>+COMUNIDAD(VOLUNTARIADO)</h3>
            <h3>+GUIA CERTIFICATION WELL</h3>
          </div>
      </div>
    </>
  );
}

export default Advertising1;
