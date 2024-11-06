const Product = require('../models/product.models.js');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productRoute = require('../routes/product.routes.js');


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// routes
app.use('/api/products', productRoute);



app.get('/', (req, res) => {
    res.send(" Hello from Node API");
});


mongoose.connect("mongodb+srv://strangerme6969:stranger123@crud.4u94w.mongodb.net/Node-API?retryWrites=true&w=majority&appName=crud")
    .then(() => {
        console.log("Connected to database");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((err) => {
        console.error("Connection failed", err);
    });
