import User from "../models/contact.model.js";

export const ContactUs = async (req, res, next) => {
  try {
    const { fullName, email, subject, message ,phone} = req.body;

    if (!fullName || !email || !subject || !message || !phone) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const ContactInfo = await User.create({
      fullName,
      email,
      subject,
      message,
      phone,
    });

    res
      .status(201)
      .json({ message: "From Submitted Successfully !!!", data: ContactInfo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
