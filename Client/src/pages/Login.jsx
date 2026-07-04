import React, { useState } from "react";
import CravingsLogo from "../assets/CravingsLogo.png";
import * as YUP from "yup";
import api from "../config/api.config.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext.jsx";

function Login() {
  const navigate = useNavigate();
  const { setUserData, setIsLogin } = useAuth();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const updateData = (e) => {
    const { name, value } = e.target;

    setLoginData((prev) => ({ ...prev, [name]: value }));
    //  setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    const payload = {
      email: loginData.email,
      password: loginData.password,
    };

    try {
      const res = await api.post("/auth/login", payload);

      //Login is Successfull
      console.log(res);
      setUserData(res.data.data); //from backend in response we pass 2 key value pairs in the data-> one key is "message" and other is "data"
      setIsLogin(true);
      console.log(res.data.data);
      sessionStorage.setItem("UserData", JSON.stringify(res.data.data));
      toast.success(res.data.message);
      console.log(res);
      navigate("/user/dashboard");
    } catch (error) {
      toast.error(error.response?.data.message || "Invalid Email or Password");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center fixed inset-0 bg-black/30 backdrop-blur-md w-screen h-screen">
        <form
          action=""
          className="flex flex-col gap-6 [&_div]:gap-2 [&_input]:w-70 [&_input]:h-12 [&_input]:p-5 bg-white rounded-xl py-10 px-10"
          onSubmit={handleSumbit}
        >
          <div className="flex justify-center items-center pr-4">
            <img src={CravingsLogo} alt="" className="h-38" />
            <p className="font-extrabold">2 YUM</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="UserEmail" className="font-extralight">
              Email
            </label>
            <input
              id="UserEmail"
              type="email"
              name="email"
              value={loginData.email}
              onChange={updateData}
              className="rounded-md border-1 border-[#dbdbdb] bg-blue h-10 outline-none focus:outline-none"
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="password" className="font-extralight">
              Password
            </label>
            <input
              id="password"
              name="password"
              value={loginData.password}
              type="text"
              onChange={updateData}
              className="rounded-md border-1 border-[#dbdbdb] bg-blue h-10 outline-none focus:outline-none"
            />

            <div className="flex justify-end font-semibold">
              <p>Forgot password?</p>
            </div>
          </div>

          <button className="bg-[#EB622C] py-4 text-white text-xl rounded-xl cursor-pointer caret-transparent">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
