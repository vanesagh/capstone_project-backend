// Environment variables
require('dotenv').config()

const cors = require("cors");

// 1. Bring express to our project
const express  = require('express');

// Add mongoose
const mongoose = require('mongoose');
const productsRoutes = require('./routes/products.routes');


// 2. Instantiate Express
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// 3. Routes
app.use(productsRoutes);


// Connect to the DB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI);
        console.log( `MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        
        
    }
};



// 4. Put the server online
// port 3000 frontend
// port 8000 backend

connectDB().then(()=> {
    app.listen(process.env.PORT,() =>{
        console.log("Server is listening on port " +process.env.PORT);
    });
});



module.exports = app;








