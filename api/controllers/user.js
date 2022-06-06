import User from "../models/User.js";



export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ); //find User by id and update it with new data and return it to client side

    res.status(200).json(updatedUser);
  } catch (err) {
    //update User and save it to database  and return it to client side
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted");
  } catch (err) {
    //delete User and save it to database  and return it to client side
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const User = await User.findById(req.params.id);
    res.status(200).json(User);
  } catch (err) {
    //get User by id and return it to client side
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const Users = await User.find();
    res.status(200).json(Users);
  } catch (err) {
    //get all Users and return it to client side

    next(err);
  }
};
