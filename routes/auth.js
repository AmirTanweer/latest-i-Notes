const express=require('express')
const Router=express.Router()
const User=require('../models/User')
const {body,validationResult} =require('express-validator')
//Create a User using: POST "api/auth/" .Doesn't require Auth
Router.post('/',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be 5 character').isLength({min:5}),
],(req,res)=>{
        
    // console.log(req.body)
   
    // const user=User(req.body)
    
    // user.save()
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(user => res.json(user))
    .catch(err=>{console.log(err)
    res.json({error:"Please Enter a unique value for email"})})
    
})
module.exports=Router