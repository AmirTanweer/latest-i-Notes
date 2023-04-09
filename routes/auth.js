const express=require('express')
const Router=express.Router()
const User=require('../models/User')

//Create a User using: POST "api/auth/" .Doesn't require Auth
Router.post('/',(req,res)=>{
        
    console.log(req.body)
   
    const user=User(req.body)
    
    user.save()
    res.send(req.body)
    
})
module.exports=Router