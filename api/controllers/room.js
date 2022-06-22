import Room from "../models/room.js";
import Hotel from "../models/Hotel.js";
import { createdError } from "../utils/error.js";

export const createRoom = async (req, res, next) => {
  const hotelid = req.params.hotelid;
  const newRoom = new Room(req.body);
  try {
    const savedroom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelid, {
        $push: { rooms: savedroom._id },
      }); //push the room id to the hotel rooms array
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedroom);
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ); //find hotel by id and update it with new data and return it to client side

    res.status(200).json(updatedRoom);
  } catch (err) {
    //update hotel and save it to database  and return it to client side
    next(err);
  }
};

export const deleteRoom = async (req, res, next) => {
  const hotelid = req.params.hotelid;
  try {
    await Room.findByIdAndDelete(req.params.id);

    try {
      await Hotel.findByIdAndUpdate(hotelid, {
        $pull: { rooms: req.params.id },
      }); //pull the room id from the hotel rooms array and return it to client side
    } catch (err) {
      //delete room and save it to database  and return it to client side
      next(err);
    }
    res.status(200).json({ message: "Room deleted" });
  } catch (err) {
    next(err);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    //get hotel by id and return it to client side
    next(err);
  }
};

export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    //get all roooms and return it to client side

    next(err);
  }
};
