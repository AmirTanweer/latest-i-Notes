require('dotenv').config()
const express=require('express')
const connectDB=require('./DB/connect')
const app=express()
const PORT= 5000;
const auth=require('./routes/auth')
const notes=require('./routes/notes')


//middleware 
app.use(express.json())
//Available Routes
app.use('/api/auth',auth)
// app.use('/api/notes',notes)



const start= async()=>{
    try{

         await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            
            console.log(`The server is running successfully at ${PORT} port`)
        })
    }
    catch(error){
       console.log(error)
    }
}
start()
