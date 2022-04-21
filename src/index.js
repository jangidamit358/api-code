const express=require("express")

const app=express()

const productsController=require("./controllers/products.controller")
  
app.use(express.json())

app.use("/proudcts",productsController)

module.exports=app