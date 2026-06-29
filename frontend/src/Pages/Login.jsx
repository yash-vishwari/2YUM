import React, { useState } from "react";
import CravingsLogo from "../assets/CravingsLogo.png";
import * as YUP from "yup";
import api from "../config/api.config.js";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const updateData = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => ({ ...prev, [name]: value }));
    console.log(userData);
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    const payload = {
      email: userData.email,
      password: userData.password,
    };

    try {
      const res = await api.post("/auth/login", payload);
      window.alert(res.data.message);
      console.log(res.data);
    } catch (e) {
      console.log(e);
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
          </div>
          <div className="flex flex-col">
            <label htmlFor="Username" className="font-extralight">
              Email
            </label>
            <input
              id="Username"
              type="text"
              name="email"
              value={userData.email}
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
              value={userData.password}
              type="text"
              onChange={updateData}
              className="rounded-md border-1 border-[#dbdbdb] bg-blue h-10 outline-none focus:outline-none"
            />

            <div className="flex justify-end font-semibold">
              <p>Forgot password?</p>
            </div>
          </div>

          <button className="bg-[#0095F6] py-4 text-white text-xl rounded-xl cursor-pointer caret-transparent">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
