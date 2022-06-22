import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin,createRoom);

//update
router.put("/:id",verifyAdmin, updateRoom);

//DELETE
router.delete("/:id/:hotelid",verifyAdmin, deleteRoom);
//GET
router.get("/:id",verifyAdmin, getRoom);



//GET ALL
router.get("/", verifyAdmin,getRooms);


export default router;