import mongoose from "mongoose";

const VenueSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String},
    location:{type:String},
    VenueType:{type:String},
    Space:{type:String},
    RentalCost:{type:Number},
    NumberOfGuests:{type:Number},
    RoomCount:{type:Number},
    rating:{type:Number},
    contact:{type:Number}
});

export default mongoose.model("Venues",VenueSchema);