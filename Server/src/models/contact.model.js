import mongoose from "mongoose";

const ContactSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
     
    },

    phone: {
      type: String,
      required: true,
    },

   subject:{

    type:String,
    required:true,
   } ,

   message:{
        type:String,
        required:true,
   }
  },

  { timestamps: true },
);

const ContactUser = mongoose.model("ContactForm", ContactSchema);

export default ContactUser;
