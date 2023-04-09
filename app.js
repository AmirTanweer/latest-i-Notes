const express=require('express')
const connectDB=require('./DB/connect')
const app=express()
const PORT=process.env.PORT || 5000;
const routes=require('./routes/routes')

app.use('/',routes)

const start= async()=>{
    try{

         connectDB();
        app.listen(PORT,()=>{
            
            console.log(`The server is running successfully at ${PORT} port`)
        })
    }
    catch(error){
       console.log(error)
    }
}
start()
