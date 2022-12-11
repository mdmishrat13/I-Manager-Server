const express = require('express')
require('dotenv').config()
const connectDb = require('./db/connectDb')
const app = express()
const port = process.env.PORT || 5000;
require('colors')

const productRoutes = require('./routes/productRoutes')





app.use('/api/v1/product',productRoutes)

const run = ()=>{
    try {
        connectDb(process.env.URI)
        app.listen(port,()=>{
            console.log("connected to db successfully!".brightGreen.bold.bgRed)
        })
    } catch (error) {
        console.log(error)
    }
}

run()