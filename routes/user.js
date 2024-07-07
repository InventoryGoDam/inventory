const express=require("express")
const { testController } = require("../controller/Test")
const router=express.Router()

router.get("/",testController)

module.exports=router