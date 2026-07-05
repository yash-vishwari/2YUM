import User from "../models/user.model.js";
import bcrypt from "bcrypt";

import { genToken } from "../utils/auth.service.js";

export const RegisterUser = async (req, res, next) => {
  try {
    const { fullName, email, phone, password, gender, dob } = req.body;

    //check for empty input
    if (!fullName || !email || !phone || !password || !gender || !dob) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    //check existing user

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const error = new Error("Email already Registered");
      error.statusCode = 409;
      return next(error);
    }

    const photoURL = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;

    const photo = {
      url: photoURL,
      publicId: null,
    };

    const SALT = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, SALT);

    const newuser = await User.create({
      fullName,
      email,
      phone,
      password: hashedPassword,
      gender,
      dob,
      photo: photo,
    });

    res.status(201).json({ message: "User Registered Successfully" });

    //Create New User nad Complete Registration
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const LoginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All Fields Required");

      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const error = new Error("Email not Registered");
      error.statusCode = 404;
      return next(error);
    }

    const isVerified = await bcrypt.compare(password, existingUser.password);

    if (!isVerified) {
      const error = new Error("Incorrect Passsword");
      error.statusCode = 401;

      return next(error);
    }
    console.log("kjdfkjhsfklnshfgjsfbjshf")
    const payload = {
      id: existingUser._id,
    };
    await genToken(payload,res);

    res.status(200).json({
      message: "Welcome back !!!",
      data:existingUser,
      
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const LogoutUser = (req, res) => {
  res.json({ messgae: "Error" });
};

//logging for error debugging
