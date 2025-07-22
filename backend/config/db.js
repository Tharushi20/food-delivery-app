import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://tharushilad:2000119@cluster0.axvoy8o.mongodb.net/food-del').then(()=>{console.log("DB connected")});
}