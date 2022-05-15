const {OrderModel,ProductModel,UserModel} = require('../models/product');

const createOrder = async (order) =>{
    //console.log(order.name);
    //console.log(order.address);
    const newuser = new UserModel({name:order.name, address:order.address});
    await newuser.save();
    const neworder = new OrderModel();
    await neworder.save();
    console.log(newuser._id);
    console.log(neworder._id);
    const savedorder = await OrderModel.updateOne({_id:neworder._id},{$push:{"items":{$each:order.items},"user":newuser._id}},{returnDocument:"after"})
    //neworder.items.push({$each: order.items});
    //console.log(savedorder);
    return savedorder;
    
    
    //return savedorder;
};

const getOrder = async (id) =>{
    const order = await OrderModel.findById(id).populate('items').lean().exec();
    return order;

};

module.exports = {
    createOrder,
    getOrder
};