import jwt from "jsonwebtoken";
import { createdError } from "../utils/error.js";
import dotenv from "dotenv";

dotenv.config();
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
   //if user is logged in, token is stored in cookies in browser
  //cookies are stored in browser and sent to server  when user requests a page and server checks if token is valid or not
  if (!token) {
    return next(createdError(401, "Unauthorized token"));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(createdError(403, "Invalid Token"));
    }
    req.user = user;
    next(); //if token is valid, continue to next middleware
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else if (err) {
      return next(
        createdError(403, "you are not authorized to perform this action")
      );
    }
  });
}; //if user is owner of the room, continue to next middleware  else return error message
//req.user.id is the id of the user who is logged in and req.params.id is the id of the user who is being checked if he is the owner of the room


export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res,next, () => {
    if ( req.user.isAdmin) {
      next();
    } else {
      return next(
        createdError(403, "you are not authorized to perform this action")
      );
    }
  });
};