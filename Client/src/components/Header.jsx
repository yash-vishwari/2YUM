import React from "react";
import LOGO from "../assets/CravingsLogo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { CiSearch } from "react-icons/ci";
import { ImExit } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function Header() {
  const navigate = useNavigate();
  const { isLogin, userData, setIsLogin, setUserData } = useAuth();
  console.log(isLogin);

  return (
    <>
      <div className="px-4 w-[100vw]">
        <div className="flex gap-10 [&_div]:caret-transparent h-25 justify-between w-screen bg-[#FDFDFD]">
          {isLogin ? (
            <>
              <div className="flex justify-between items-center w-screen px-8 pe-20 border-b-2 h-30 bg-[#FDFDFD]">
                <div className="flex items-center p-3">
                  <img src={LOGO} alt="" className="h-30  mb-3 " />
                </div>
                <div className="bg-[#EBEBEB] flex gap-10 items-center px-20 py-3 rounded-4xl">
                  <p className="text-3xl font-semibold">DashBoard Activity</p>
                  <div className="flex items-center gap-3 text-xl bg-[#F6F5F8] rounded-4xl  hover:cursor-pointer h-14 px-4 w-[30vw] ">
                    <CiSearch />
                    <input
                      type="text"
                      name="searchBox"
                      placeholder="Search..."
                      className="border-0 outline-0"
                    />
                  </div>
                  <div className="flex items-center gap-2 h-14 overflow-hidden">
                    <img
                      src={userData.photo}
                      alt=""
                      className="h-14 w-14 rounded-full object-cover "
                    />
                    <p className="text-nowrap font-semibold">
                      {userData.fullName}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between w-full py-5">
                <div className="flex items-center">
                  <img src={LOGO} alt="" className="h-30 " />
                </div>
                <div className="flex items-center gap-20 text-2xl font-md [&_Link]:focus:outline-none">
                  <Link to={"/home"}>Home</Link>
                  <Link to={"/about"}>About</Link>
                  <Link to={"/contactus"}>ContactUs</Link>
                </div>

                <div className="text-2xl flex items-center p-2 gap-6 me-6">
                  <Link to={"/login"}>Login</Link>
                  <Link
                    to={"/register"}
                    className="bg-primary py-4 px-4 rounded-xl text-white "
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;

// public helper(int[] arr,int i,int target)
// {

//   if(i<0)
//   {
//     return false;
//   }

// if(target ==0)
// {
//   return true;
// }

// if(arr[i] <=target )
// {
//   return helper(arr,i-1,target-arr[i]) ||helper(arr,i-1,target);
// }

// return helper(arr,i-1,target);
// }

// public int helper(int[] arr,int i ,int target){

//   if(i <=0)
//   {
//     if(target ==0)
//     {
//       return 1;
//     }
//     return 0;
//   }

//   if(arr[i-1] <=target)
//   {
//     return helper(arr,i-1,target-arr[i-1])+helper(arr,i-1,target);
//   }

//   return helper(arr,i-1,target);
// }

// ListNode slow =head;

// ListNode fast =head;

// while(fast !=null && fast.next != null){
//   fast =fast.next.next;
//   slow =slow.next;

//   if(fast ==slow)
//   {
//     //Found Cycle
//     return true;
//   }

//   return false;
// }

//
