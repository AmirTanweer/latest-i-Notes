const express=require('express')
const Router=express.Router()
const User=require('../models/User')
const {body,validationResult} =require('express-validator')
//Create a User using: POST "api/auth/createuser" . No login Required
Router.post('/createuser',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be 5 character').isLength({min:5}),
],async(req,res)=>{
        
    //If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Check whether the user with this email exists already
    try{

      let user=await User.findOne({email:req.body.email})
      
    
      if(user){
      return res.status(400).json({error:"Sorry a user with this email already exists"})
    }
    //Creat a new user
    user=await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    //   .then(user => res.json(user))
    // .catch(err=>{console.log(err)
    // res.json({error:"Please Enter a unique value for email"})})
    res.json(user)
  }
  catch(error){
    console.error(error.message)
    res.status(500).send("some Error occured")
  }
  })
module.exports=Router