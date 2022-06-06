import mongoose from "mongoose";

const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      maxPeople: {
        type: Number,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
     
      roomNumbers: {
        type: [{
            number:Number,unavailableDates:
            [{
                type:Date
            }]
        }],
      },
      
},{ timestamp: true });


export default mongoose.model("Room", RoomSchema);