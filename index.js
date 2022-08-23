const express = require('express')
const bodyParser = require('body-parser')
const useragent = require('express-useragent')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
require("dotenv").config()
const db = require('./src/config/db')
const PORT = process.env.PORT || 3000

const portfolioRouter = require('./src/portfolio/userRouter')
const app = express()
app.use(express.json())
app.use(useragent.express())
app.use(cookieParser())
app.use(morgan('common'))

db.connect()
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()
})


app.use('/api/rootrsk', portfolioRouter)
app.use('/',(req,res)=>{
    res.json({
        message:'Welcome to rootrsk api'
    })
})

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`)
})
