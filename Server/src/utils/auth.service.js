import jwt from "jsonwebtoken";
export const genToken = async (userId, res) => {
  try {
    const token = await jwt.sign(userId, process.env.JWT_SECRET, {
      expiresIn: "1d", //default is 1 minuntes i.e.->1m
    });


    res.cookie("token", token, {
      maxAge: 1000 * 60 * 60 * 24, //24 hours
      httpOnly: true, //to prevent javascript access to the token
      secure: false, //used as true when https used i.e. in production
      sameSite: "lax", //srrict or none or lax
    });


    //token is generated successfully 
    //also token is stored in cookies 

    console.log(token);
    return token;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
