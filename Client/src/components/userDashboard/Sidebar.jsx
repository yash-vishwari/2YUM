import React, { useState } from "react";
import { MdFastfood } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { HiOutlineViewGrid } from "react-icons/hi";
import Orders from "./Orders.jsx";
import Overview from "./Overview.jsx";
import Settings from "./Settings.jsx";
import WishList from "./WishList.jsx";
import LOGO from "../../assets/CravingsLogo.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BsBookmarkHeartFill, BsPersonGear } from "react-icons/bs";
import { useAuth } from "../../context/AuthContext.jsx";

function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [active, setActive] = useState("Overview");
   const { setUserData, setIsLogin } = useAuth();
   const navigate = useNavigate();
  const updateExpanded = () => {
    setExpanded(!expanded);
  };
  const handleLogOut = async() => {
    sessionStorage.removeItem("UserData");
    setUserData("");
    setIsLogin(false);

    toast.success("Logged out successfully ");

    
    navigate("/");
  };

  return (
    <div className="flex">
      <div
        className={`flex flex-col gap-6 ps-3 pt-5 h-screen mt-10 border-e-2 ${expanded ? "w-58" : "w-20 mx-6"}`}
      >
        {/* shows the burder menu */}
        <div className="flex items-center">
          <button onClick={updateExpanded}>
            <FaListUl className="h-8 w-10 ms-3" /> {/* Apply size class here */}
          </button>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div>
            <SideBarItem
              icon={<HiOutlineViewGrid size={40} />}
              text="Overview"
              active={active}
              expanded={expanded}
              setActive={setActive}
            />
            <SideBarItem
              icon={<MdFastfood size={40} />}
              text="Orders"
              active={active}
              expanded={expanded}
              setActive={setActive}
            />
            <SideBarItem
              icon={<BsBookmarkHeartFill size={40} />}
              text="WishList"
              active={active}
              expanded={expanded}
              setActive={setActive}
            />
            <SideBarItem
              icon={<BsPersonGear size={40} />}
              text="Settings"
              active={active}
              expanded={expanded}
              setActive={setActive}
            />
          </div>

          <div className="mb-5">
            <SideBarItem
              icon={<ImExit size={40} />}
              text="Logout"
              active={active}
              expanded={expanded}
              setActive={setActive}
              logout={handleLogOut}
            />
          </div>
        </div>
      </div>

      <div className="flex-1">
          {active === "Overview" && <Overview />}

          {active === "Orders" && <Orders />}

          {active === "WishList" && <WishList />}

          {active === "Settings" && <Settings />}
        </div>
    </div>
  );
}

export default Sidebar;

function SideBarItem(props) {
  return (
    <>
      <div
        className={`relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          props.active === props.text
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
       
    `}
        onClick={
          props.text === "Logout"
            ? () => props.logout()
            : () => props.setActive(props.text)
        }
      >
        {props.icon}
        <span
          className={`overflow-hidden transition-all ${
            props.expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {props.text}
        </span>
      </div>
    </>
  );
}
