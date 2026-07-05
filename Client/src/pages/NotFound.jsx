import React from 'react'
import NotFoundGIF from "../assets/NotFoundGIF.gif";
function NotFound() {
  return (
    <>
      <div className="text-6xl text-center font-bold">
        <img src={NotFoundGIF} alt="" />
      </div>
    </>
  );
}

export default NotFound
