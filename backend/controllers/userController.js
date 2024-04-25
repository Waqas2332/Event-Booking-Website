import bcryptjs from "bcryptjs";

import User from "../models/userModel.js";
import { generateToken } from "../middlewares/jwt.js";

export const signup = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res
        .status(403)
        .json({ message: "User already exists", ok: false });
    }

    const hashedPassword = await bcryptjs.hash(password, 12);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    generateToken(res, user._id);

    res
      .status(201)
      .json({ message: "User Created Successfully", ok: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
