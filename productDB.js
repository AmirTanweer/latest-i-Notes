
const Product=require('./Schma/models')
const productjson=require('./Product.json')
const connectDB = require('./DB/connect')

const start=async()=>{ 
    try{

        await connectDB()
        await Product.deleteMany()
        await Product.create(productjson)
        console.log('succes')
    }
    catch(error){
        console.log(error)
    }

}
start()