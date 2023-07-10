const mongoose = require("mongoose")


//schema
const orderSchema = mongoose.Schema({
    
    
      
        user : { type: String, ref: 'user' },
        restaurant : { type: String, ref: 'restaurant' },
      items: [{
        name: String,
        price: Number,
        quantity: Number
      }],
      totalPrice: Number,
      deliveryAddress: {
        street: String,
        city: String,
        state: String,
        country: String,
        zip: String
      },
      status: String          // e.g, "placed", "preparing", "on the way", "delivered"
   
           
})


//model

const OrderModel = mongoose.model("order" , orderSchema)

module.exports={
    OrderModel
}