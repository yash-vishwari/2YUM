import React from "react";
import FoodImage from "../../assets/burgerImg.jpg";

const Overview = () => {
  return (
    <div className="pt-15">
      <div className="flex items-center justify-center w-full h-100">
        <div
          className="border-0 w-[70vw] h-full rounded-4xl bg-cover bg-contain hover:cursor-pointer p-10 flex flex-col items-end"
          style={{ backgroundImage: `url(${FoodImage})` }}
        >
          <div className="flex flex-col pt-10 gap-10">
            <p className="text-5xl font-bold text-white text-wrap w-100">
              You're Live to Eat Not eat to live
            </p>

            <button className="bg-white h-15 py-auto px-4 w-30 rounded-4xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
