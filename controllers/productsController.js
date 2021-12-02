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

router.put('/:id', async (req,res) => {
    await Product.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        res.status(200).json({msg: "Produto alterado"})
    }).catch((error) => {
        res.status(400).json({msg: "Error:" + error})
    })
})

router.delete('/:id', async (req, res) => {
    await Product.findByIdAndDelete({_id: req.params.id}).then(() => {
        res.status(200).json({msg: "Produto excluido com sucesso!"})
    }).catch((error) => {
        res.status(400).json({msg: "Error" + error})
    })
})


module.exports = router