import express from 'express'
import { addFood } from '../controllers/foodController.js'
import multer from 'multer'//to store images

const foodRouter = express.Router();//can create get/post,.. methods

//image storgae engine


foodRouter.post("/add",addFood)


export default foodRouter;
