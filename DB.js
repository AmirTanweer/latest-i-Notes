const mongoose=require('mongoose')
const uri='mongodb+srv://amirtanweer:BzRhYuFWo9yVDBQC@cluster0.aazawk6.mongodb.net/amirtanweer?retryWrites=true&w=majority'


function start(){
    mongoose.connect(uri,{
         useNewUrlParser: true,
          useUnifiedTopology: true 
        })
        .then(()=>{
            console.log("Successfully connected to MongoDB")
        })
        .catch(err=>console.log("Error connecting to MongoDB",err))
}

start()