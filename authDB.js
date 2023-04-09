require('dotenv').config()

const connectDB = require('./DB/connect')
const user = require('./models/User')
const userjson=require('./user.json')
const start=async ()=>{
    try{
       await connectDB(process.env.MONGODB_URL)
       await user.deleteMany()
        await user.create(userjson)
         
        console.log("successfull authDB ")
    }
    catch(error){
        console.log(error);
        
    }
}
start()