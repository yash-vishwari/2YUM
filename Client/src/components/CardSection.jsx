import Hote1Image from "../assets/hotel1.png";
import Hote2Image from "../assets/hotel2.png";
import Hote3Image from "../assets/hotel3.png";

// const Card = function () {
//   return (
//     <>
//       <div className="bg-gradient-to-b from-[#f57200] from-[44%] to-white">
//         <div className="ps-[165px] text-[30px] text-white pt-3">
//           <p className="font-bold ">Featured Restaurant</p>
//           <p>3 restaurants available</p>
//         </div>

//         <div className="mt-3 flex gap-6 justify-center">
//           <div className="bg-white-500 w-fit h-fit bg-white rounded-tl-[10px] rounded-tr-[10px]">
//             <div>
//               <img
//                 src={Hote1Image}
//                 className="h-60 w-90 rounded-tl-[10px] rounded-tr-[10px] "
//                 alt=""
//               />
//             </div>

//             <div className="mx-2 my-2">
//               <div className="text-balance">
//                 <p className="font-bold"></p>
//               </div>
//               <div className="w-80 text-wrap text-[14px] mt-3">
//
//               </div>

//               <div className="flex gap-4 mt-4">
//                 <span className="text-[14px] p-2 bg-[#F5EDE5]"></span>
//                 <span className="text-[14px] p-2 bg-[#F5EDE5]">Chinese</span>
//                 <span className="text-[14px] p-2 bg-[#F5EDE5]">Italian</span>
//               </div>

//               <div className="p-2 mt-3">
//                 <button className="bg-[#C2420D] text-white p-2 w-85 rounded-[10px]">
//                   View Menu
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white-500 w-fit h-fit bg-white rounded-tl-[10px] rounded-tr-[10px]">
//             <div>
//               <img
//                 src={Hote2Image}
//                 className="h-60 w-90 rounded-tl-[10px] rounded-tr-[10px]"
//                 alt=""
//               />
//             </div>

//             <div className="text-balance mt-1">
//               <p className="font-bold">Raj darbar</p>
//             </div>
//             <div className="w-80 text-wrap text-[14px] mt-3">
//               Raj Darbar is a one-of-a-kind Indian restaurant that offers a
//               unique dining experience for families and friends with a
//               dhaba-style theme.
//             </div>

//             <div className="flex gap-4 mt-4">
//               <span className="text-[14px] p-2 bg-[#F5EDE5]">Indian</span>
//               <span className="text-[14px] p-2 bg-[#F5EDE5]">Chinese</span>
//               <span className="text-[14px] p-2 bg-[#F5EDE5]">Italian</span>
//             </div>

//             <div className="p-2 mt-3 ">
//               <button className="bg-[#C2420D] text-white p-2 w-85 rounded-[10px]">
//                 View Menu
//               </button>
//             </div>
//           </div>

//           <div className="bg-white-500 w-fit h-fit bg-white rounded-tl-[10px] rounded-tr-[10px]">
//             <div>
//               <img
//                 src={Hote3Image}
//                 className="h-60 w-90 rounded-tl-[10px] rounded-tr-[10px] hover:scale-120"
//                 alt=""
//               />
//             </div>

//             <div className="text-balance mt-1">
//               <p className="font-bold">Countryside Culture</p>
//             </div>
//             <div className="w-80 text-wrap text-[14px] mt-3">
//               A hidden gem away from the city, offering lush green meadows and
//               peaceful walking paths for relaxation .
//             </div>

//             <div className="flex gap-4 mt-4">
//               <span className="text-[14px] p-2 bg-[#F5EDE5]">Indian</span>
//               <span className="text-[14px] p-2 bg-[#F5EDE5]">Chinese</span>
//             </div>

//             <div className="p-2 mt-3">
//               <button className="bg-[#C2420D] text-white p-2 w-85 rounded-[10px]">
//                 View Menu
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Card;

// // function Card(){

// // }

import React from "react";
import Card from "./Card.jsx";
const CardSection = () => {
  return (
    <>
      {/* <div className="ps-[165px] text-[30px] text-white pt-3">
        <p className="font-bold ">Featured Restaurant</p>
        <p>3 restaurants available</p>
      </div> */}

      <div className="grid grid-cols-3 w-screen gap-y-10 bg-background py-10 ps-20">
        <Card
          image={Hote1Image}
          description=" Enjoy the thrill of grill and barbecue at Under The Mango Tree restaurant at Jehan Numa Palace, Bhopal. Head here now!"
          name="Under The Mango Tree"
          category={["Indian", "Chinese", "Italian"]}
        />

        <Card
          image={Hote1Image}
          description=" Enjoy the thrill of grill and barbecue at Under The Mango Tree restaurant at Jehan Numa Palace, Bhopal. Head here now!"
          name="Under The Mango Tree"
          category={["Indian", "Chinese", "Italian"]}
        />

        <Card
          image={Hote1Image}
          description=" Enjoy the thrill of grill and barbecue at Under The Mango Tree restaurant at Jehan Numa Palace, Bhopal. Head here now!"
          name="Under The Mango Tree"
          category={["Indian", "Chinese", "Italian"]}
        />

        <Card
          image={Hote1Image}
          description=" Enjoy the thrill of grill and barbecue at Under The Mango Tree restaurant at Jehan Numa Palace, Bhopal. Head here now!"
          name="Under The Mango Tree"
          category={["Indian", "Chinese", "Italian"]}
        />

        <Card
          image={Hote1Image}
          description=" Enjoy the thrill of grill and barbecue at Under The Mango Tree restaurant at Jehan Numa Palace, Bhopal. Head here now!"
          name="Under The Mango Tree"
          category={["Indian", "Chinese", "Italian"]}
        />

        <Card
          image={Hote1Image}
          description=" Enjoy the thrill of grill and barbecue at Under The Mango Tree restaurant at Jehan Numa Palace, Bhopal. Head here now!"
          name="Under The Mango Tree"
          category={["Indian", "Chinese", "Italian"]}
        />
      </div>
    </>
  );
};

export default CardSection;
