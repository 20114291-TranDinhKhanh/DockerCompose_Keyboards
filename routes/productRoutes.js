const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

// Lay phim
router.get('/', async(req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Tao phim
router.post('/', async(req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;