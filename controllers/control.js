const Product=require('../Schma/models')
const getAllElement=async(req,res)=>{
    const mydata= await Product.find()
    res.status(200).json({mydata})

    
}
const getAllElementTesting=async(req,res)=>{
    res.status(200).json({"Name":"amir"})
}
module.exports={getAllElement,getAllElementTesting}