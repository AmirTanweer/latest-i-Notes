const mongoose=require('mongoose')

const uri='mongodb+srv://amirtanweer:BzRhYuFWo9yVDBQC@cluster0.aazawk6.mongodb.net/amirtanweer?retryWrites=true&w=majority'

const connectDB=()=>{
    console.log("connected To DB")
    mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
}
module.exports=connectDB;