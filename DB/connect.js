const mongoose=require('mongoose')



const connectDB=(uri)=>{
    console.log("connected To DB")
   return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true ,
    })
}
module.exports=connectDB;