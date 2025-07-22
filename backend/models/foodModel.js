import mongoose from "mongoose";

const foodShema = new mongoose.Schema({
    name:{type:String,reqired:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})

const foodModel = mongoose.models.food || mongoose.model("food",foodShema) //or operator cuz to stop create model everytime we run. do if the model already there it will not create new model

export default foodModel;
