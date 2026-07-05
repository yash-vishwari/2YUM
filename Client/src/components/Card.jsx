
import React from 'react'

const Card = (props) => {
  console.log(props);
  return (
    <>
      <div className="bg-white-500 w-fit h-fit bg-white rounded-3xl hover:scale-95 transition duration-500 hover:shadow-4xl hover:rounded-2xl hover:cursor-pointer text-xl">
        <div className="overflow-hidden">
          <img
            src={props.image}
            className="h-60 w-100 rounded-tl-[10px] rounded-tr-[10px]"
            alt=" "
          />
        </div>

        <div className="mx-2 my-2 px-2 pb-2">
          <div className="text-balance">
            <p className="font-bold">{props.name}</p>
          </div>
          <div className="w-80 text-wrap text-[14px] mt-3">
            {props.description}
          </div>

          <div className="flex gap-4 mt-4"> </div>

          <div >
            <button className="bg-[#C2420D] text-white p-2 w-full rounded-[10px]">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card
