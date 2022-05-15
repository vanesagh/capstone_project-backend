const orderService = require('../services/order-service');

const createOrder = async (req, res) => {
    const newOrder = req.body;
    //console.log(newOrder);

    try {
        const savedOrder = orderService.createOrder(newOrder);
        res.status(201).json(savedOrder);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Internal error"});
        
    }

};

const getOrder = async (req,res, next) =>{
    const id = req.params.id;
    console.log(id);
    try {
        const order = await orderService.getOrder(id);
        res.setHeader("Total", order.items.length);
        res.json(order);
    } catch (error) {
        next(error);
        
    }
};


module.exports = {
    createOrder,
    getOrder
};