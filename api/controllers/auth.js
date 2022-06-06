import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { createdError } from "../utils/error.js";
dotenv.config();
export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = await User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(201).json({
      message: "User created successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    if (!user) {
      return next(createdError(404, "User not found"));
    }

    const isPassward = await bcrypt.compare(req.body.password, user.password);
    if (!isPassward) {
      return next(createdError(400, "Wrong password"));
    }
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );
    const { password, isAdmin, ...otherDetail } = user._doc;
    res.cookie("access_token",token,{ 
      httpOnly: true,
    }).status(200).json({ ...otherDetail });
  } catch (err) {
    next(err);
  }
};
