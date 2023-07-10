const express = require("express")
require("dotenv").config()

const {connection} = require("./config/db")
const { userRouter } = require("./router/user.router")
const { restaurantRouter } = require("./router/restaurant.router")

const {orderRouter} = require("./router/order.router")


const app = express()

app.use(express.json())  //json parsar


app.get("/" , (req,res)=>{
   
    res.send("Welcome")
})

//user router
app.use("/" , userRouter)
//restaurant router
app.use("/" ,restaurantRouter)

//order
app.use("/" , orderRouter)




app.listen(process.env.port || 5000 , async()=>{
    await connection
    console.log("MongoDb is connected")
    console.log(`${process.env.port} is working`)
})