const express = require("express")
const {OrderModel} = require("../model/order.model")
const { auth } = require("../config/middleware/auth.middleware")
const orderRouter = express.Router()

orderRouter.get("/abc", (req,res)=>{
    res.send("work")
})


//get by id
orderRouter.get("/api/orders/:id" ,  async(req,res)=>{
    let id = req.params.id
    try {
        let data = await OrderModel.find({_id : "id"})
        res.status(200).send(data)

    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})

//update
orderRouter.patch("/api/orders/:id" ,auth,async(req,res)=>{
    let id = req.params.id
    let payload = req.body
    try {
        let user = await OrderModel.findByIdAndUpdate(
            { _id: id },
            payload
          );

          res.send({msg : "order status is updated"})

    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})

//post order

orderRouter.post("/api/orders" ,auth , async(req,res)=>{
    // let id = req.params.id
    let payload = req.body
    console.log(payload)

    try {
        let user = new OrderModel(payload);
        await user.save();
        res.send({"msg" : "Ordered sussesfully"})

    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})


module.exports={
    orderRouter
}



