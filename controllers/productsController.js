const express = require('express')
const Product = require('../models/productsModel')
const router = express.Router();

router.get('/', async (req, res) => {

    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({msg: "Error: " + error})
    }
    
})

router.post('/', async (req, res) => {
    await Product.create(req.body).then(() => {
        res.status(200).json({msg: "Produto cadastrado"})
    })
})


module.exports = router