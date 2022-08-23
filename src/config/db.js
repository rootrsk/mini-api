const mongoose = require('mongoose')
const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('Connected with Database')
    } catch (error) {
        console.log("Error Connection Server")
        console.log(error)
    }
}

module.exports = {
    connect
}