const express=require("express")

const router=express.Router()
const Products=require("../models/products.model")

router.get("/:id",async(req,res)=>{
    try{
        const item =await Products.findById(req.params.id).lean().exec()
        return res.status(200).send(item)
    }catch(err)
    {
        return res.status(500).json({error:err.message});
    }
})

router.get("",async(req,res)=>{
    try{
        const page=+req.query.page || 1
        const size=+req.query.size  || 20
        
        const skip=(page-1)*size

        const totalPages=Math.ceil((await Products.find().countDocuments())/size)

        const product=await Products.find().skip(skip).limit(size).lean().exec()
        return res.status(200).send({product,totalPages})
    }catch(e){
        return res.status(400).send(e.message)
    }
})



module.exports=router