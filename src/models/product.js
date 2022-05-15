const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true,           
        },
        description: {
            type: String
        },
        price: {
            type: Number,
            required:true

        }

    }
);

const ProductModel = mongoose.model("Product", ProductSchema);

const UserSchema= mongoose.Schema({
    name: {
        firstname:{
            type: String,
            required: true
        },
        lastname:{
            type: String,
            required: true
        }
        
    },
    address: {
        street:{
            type: String,
            required: true
        },
        state:{
            type: String,
            required: true
        },
        zipcode:{
            type: Number,
            required: true
        }
    },
    
});

const UserModel = mongoose.model('User',UserSchema);



const OrderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },

        items: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Product'  
            }
        ],

    }
);

const OrderModel = mongoose.model('Order', OrderSchema);



module.exports = {
    ProductModel,
    UserModel,
    OrderModel
    
};