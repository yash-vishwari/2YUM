import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


export const AuthProtect = async (req, res, next) => {
  
  try {
  
    const token = req.cookies.token;

    if (!token) {
      const error = new Error("Unauthorized Access");
      error.statusCode = 401;

      return next(error);
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET)


    console.log(decoded);
    const verifiedUser =await User.findById(decoded.id);

    if(!verifiedUser){
      const error =new Error("User not Found");
      error.statusCode =404
      return next(error)
    }
    req.user = verifiedUser;
    next()
  } catch (e) {
    console.log(e);
    res.status(500).json({message:"Internal Server Error"});
  }
};
