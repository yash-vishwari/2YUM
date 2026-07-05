import React from "react";
import * as YUP from "yup";

import { useState } from "react";
import CravingsLogo from "../assets/CravingsLogo.png";

const ContactUs = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",

  
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const updateUserDate = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const phoneRegExp = /^\d{10}$/;

  const validationSchema = YUP.object({
    fullName: YUP.string().required("* Name is required"),
    email: YUP.string()
      .required("* Email is required")
      .email("Invalid Email Format"),
   
    phone: YUP.string()
      .matches(phoneRegExp, "* Please enter a valid phone number format")
      .required("* phone no is required"),
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
    if (isValid) {
      console.log("Form Submitted");
      window.message("Registration Successfull !!");

      try{
        const payload = {
          fullName:userData.fullName,
          phone:userData.phone,
          email:userData.email,
        };
      }

      catch(error){
        console.log(error.response?.data.message || "Invalid Email or Password");

      }
    } else {
      window.alert("Invalid user data");
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
            <label htmlFor="">Subject</label>
            <input type="text" name="subject" />
          </div>

          <button className="bg-[#0095F6] py-2 px-20 rounded-[12px] text-white text-xl outline-0  w-80">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
