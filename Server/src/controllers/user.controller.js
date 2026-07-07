import User from "../models/user.model.js";
import cloudinary from "../config/cloudinary.config.js";

export const editUserProfile = async (req, res, next) => {
  try {
    const { email, fullName, phone } = req.body;
    const newPhoto = req.file;
    console.log("Req Body :", req.body);
    console.log("Req File :", req.file);
    if (!email || !fullName || !phone) {
      const error = new Error("All fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not registered");
      error.statusCode = 404;
      return next(error);
    }

    if (newPhoto) {
      existingUser.photo.publicId &&
        cloudinary.uploader.destroy(existingUser.photo.publicId);
      const b64 = Buffer.from(newPhoto.buffer).toString("base64");
      const dataURI = `data:${newPhoto.mimetype};base64,${b64}`;
      // console.log(dataURI.slice(0, 100));

      const result = await cloudinary.uploader.upload(dataURI, {
        folder: "Cravings678/profile",
        width: 500,
        height: 500,
        crop: "fill",
      });

      const p = {
        url: result.secure_url,
        publicId: result.public_id,
      };
      existingUser.photo = p;

      //    existingUser.photo.publicId = result.public_id;
      // console.log(result);
    }

    existingUser.fullName = fullName;
    existingUser.phone = phone;

    await existingUser.save();

    res
      .status(200)
      .json({ message: "Profile Updated Successfully", data: existingUser });
  } catch (error) {
    console.log(error.message);
    next();
  }
};
