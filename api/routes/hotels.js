import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin,createHotel);

//update
router.put("/:id",verifyAdmin, updateHotel);

//DELETE
router.delete("/:id",verifyAdmin, deleteHotel);
//GET
router.get("/:id",verifyAdmin, getHotel);

//DELETE ALL
// router.delete("/", async (req, res) => {
//   try {
//     const hotel = await Hotel.deleteMany();
//     res.status(200).json(hotel);
//   } catch (err) {
//     //delete all hotels and save it to database  and return it to client side
//     res.status(500).send(err);
//   }
// });

//GET ALL
router.get("/", verifyAdmin,getHotels);

export default router;
