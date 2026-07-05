import User from "../models/user.model.js";
import cloudinary from "../config/cloudinary.config.js";

export const editUserProfile =async (req,res,next)=>{


    try{

        const{fullName,email,phone} =req.body;

        if(!fullName || !email || !phone){

            const error =new Error("All Fields are Required");

            error.statusCode =400;

            return next(error);
        }


        const existingUser =await User.findOne({email});
        if(!existingUser){
            const error = new Error("Email Not Registered");

            error.statusCode = 404;

            return next(error);
        }


        existingUser.fullName =fullName;
        existingUser.phone =phone;

        await existingUser.save();

        res
        .status(200)
        .json({message:"User Profile Updated Successfully",data:existingUser})

    }

    catch(error){

       console.log(error);
       res.status(500).json({ message: "Internal Server Error" });
    }

}