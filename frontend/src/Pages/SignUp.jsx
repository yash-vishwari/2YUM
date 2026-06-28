import React from "react";
import api from "../config/api.config.js";
import * as YUP from "yup";

import { useState } from "react";
import CravingsLogo from "../assets/CravingsLogo.png";

const Register = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const updateUserDate = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const phoneRegExp = /^\d{10}$/;

  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>_+\-=\[\]\\\/~`])[A-Za-z\d!@#$%^&*(),.?":{}|<>_+\-=\[\]\\\/~`]{8,}$/;

  const validationSchema = YUP.object({
    fullName: YUP.string().required("* Name is required"),
    email: YUP.string()
      .required("* Email is required")
      .email("Invalid Email Format"),
    dob: YUP.date()
      .typeError("* Dob is required")
      .required("* Dob is required"),
    gender: YUP.string().required("* Gender is required"),
    phone: YUP.string()
      .matches(phoneRegExp, "* Please enter a valid phone number format")
      .required("* phone no is required"),
    password: YUP.string()
      .matches(
        passwordRegExp,
        "* Password mush contain a lowercase,uppercase,digit and one special character and mmin length 8",
      )
      .required("* password is required"),
  });

  const Validate = async () => {
    try {
      console.log(await validationSchema.isValid(userData));

      await validationSchema.validate(userData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = await Validate();
    if (!isValid) {
      window.alert("Invalid user data");
      return;
    }

    const payload = {
      fullName: userData.fullName,
      email: userData.email,
      dob: userData.dob,
      gender: userData.gender,
      password: userData.password,
      phone: userData.phone,
    };
    console.log(payload);

    try {
      const res = await api.post("auth/register", payload);
      alert(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center fixed inset-0 bg-black/30 backdrop-blur-sm p-5 w-screen h-auto">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center [&_input,&_select]:rounded-[10px] [&_input,&_select]:pl-4 [&_input,&_select]:border-1 [&_input,&_select]:outline-0 [&_input,&_select]:border-[#dbdbdb]  [&_input,&_select]:p-3 [&_input]:h-12 [&_input,&_select]:w-80  [&_div]:flex [&>div]:flex-col gap-2 [&_.error]:text-red-500 bg-white rounded-xl px-8 py-2 shadow-xl"
        >
          <div className="text-center pr-8">
            <img src={CravingsLogo} alt="" className="h-30" />
          </div>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              placeholder="Enter your First Name"
              value={userData.fullName}
              onChange={updateUserDate}
            />
            {errors.fullName && <div className="error">{errors.fullName}</div>}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={userData.email}
              placeholder="Enter your Email"
              onChange={updateUserDate}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div>
            <label htmlFor="dob">Date Of Birth</label>
            <input
              id="dob"
              type="date"
              name="dob"
              value={userData.dob}
              onChange={updateUserDate}
            />
            {errors.dob && <div className="error">{errors.dob} </div>}
          </div>

          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="text"
              name="phone"
              value={userData.phone}
              placeholder="Enter your Phone No.."
              onChange={updateUserDate}
            />
            {errors.phone && <div className="error">{errors.phone} </div>}
          </div>

          <div>
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              onChange={updateUserDate}
              value={userData.gender}
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>

              <option value="Female">Female</option>

              <option value="Other">Other</option>
            </select>
            {errors.gender && <div className="error">{errors.gender} </div>}
          </div>

          <div className="w-80">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="text"
              name="password"
              value={userData.password}
              onChange={updateUserDate}
            />
            {errors.password && <div className="error">{errors.password} </div>}
          </div>

          <button className="bg-[#0095F6] py-2 px-20 rounded-[12px] text-white text-xl outline-0  w-80">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
