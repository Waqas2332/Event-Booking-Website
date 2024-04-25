import bcryptjs from "bcryptjs";

import User from "../models/userModel.js";
import { generateToken } from "../middlewares/jwt.js";

export const signup = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res
        .status(409)
        .json({ message: "User already exists", ok: false });
    }

    const hashedPassword = await bcryptjs.hash(password, 12);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const token = generateToken(user._id);

    res
      .status(201)
      .json({ message: "User Created Successfully", ok: true, user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email: email });
    if (!userExists) {
      return res
        .status(404)
        .json({ message: "Invalid Credentials", ok: false });
    }

    const matchPassword = await bcryptjs.compare(password, userExists.password);
    if (!matchPassword) {
      return res
        .status(404)
        .json({ message: "Invalid Credentials", ok: false });
    }
    const token = generateToken(userExists._id);
    res
      .status(200)
      .json({ message: "Sign in successfully", user: userExists, token });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
