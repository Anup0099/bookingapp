import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import roomRoute from "./routes/rooms.js";
import hotelRoute from "./routes/hotels.js";
import cookieParser from "cookie-parser";
import  cors from "cors";

const app = express();
const port = 8000;
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("backend Connected");
  } catch (error) {
    console.log("Error connecting to database");
  }
}; //connect to mongodb  and log if connected or not to console  and if not connected to mongodb then log error  to console
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected");
});
mongoose.connection.on("connected", (err) => {
  console.log("MongoDB Connected");
});



app.use(cors());
app.use(cookieParser());
app.use(express.json());
//use express json middleware to parse json data in request body and set it to req.body object
//middleware to parse json data in request body and set it to req.body object

app.use("/api/auth", authRoute);
app.use("/api/users",userRoute );
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomRoute);

app.use((err, resreq, res, next) => {
  const errorStatus = err.status || 500;
  const messageStatus = err.message||"Something went wrong";
  return res.status(errorStatus).json({ 
    sucess: false,
    message: messageStatus,
    status: errorStatus,
    stack: err.stack
  });
})//middleware to log request to console  and if request is not handled by any of the above routes then log it to console





app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}!`);
});
