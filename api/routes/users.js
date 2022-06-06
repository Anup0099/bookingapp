import express from "express";
import {

  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";

import { verifyToken,verifyUser,verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE


// router.get("/checkauthentication",verifyToken, (req, res,next) => {
//     res.status(200).json({message: "You are authenticated"});
// });


// router.get("/checkuser/:id",verifyUser, (req, res,next) => {
//   res.send( "hello user you are logged in and you can delete your account");
// });
// router.get("/checkadmin/:id",verifyAdmin, (req, res,next) => {
//   res.send( "hello admin you are logged in and you can delete users");
// })
//update
router.put("/:id",verifyUser, updateUser);

//DELETE
router.delete("/:id",verifyUser, deleteUser);
//GET
router.get("/:id",verifyUser, getUser);

//GET ALL
router.get("/",verifyUser, getUsers);

export default router;
