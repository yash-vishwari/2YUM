import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import OTP from "../models/otp.model.js";

export const AuthProtect = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      const error = new Error("Unauthorized");
      error.statusCode = 401;

      return next(error);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log(decoded);
    const verifiedUser = await User.findById(decoded.id);

    if (!verifiedUser) {
      const error = new Error("User not Found");
      error.statusCode = 404;
      return next(error);
    }
    req.user = verifiedUser;
    next();
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const OTPAuthProtect = async (req, res, next) => {
  try {
    const token = req.cookies.OTPtoken;

    if (!token) {
      const error = new Error("Unauthorized");
      error.statusCode = 401;

      return next(error);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("Decoded Token for OTP", decoded);
    const verifiedUser = await OTP.findById(decoded.id);

    if (!verifiedUser) {
      const error = new Error("User not Found");
      error.statusCode = 404;
      return next(error);
    }
    req.user = verifiedUser;
    next();
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
