const express = require('express')
const Product = require('../models/productsModel')
const router = express.Router();

// Buscar todos os produtos no banco de dados
router.get('/', async (req, res) => {

    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({msg: "Error: " + error})
    }
    
})

// Cadastrar produto no banco de dados
router.post('/', async (req, res) => {
    await Product.create(req.body).then(() => {
        res.status(200).json({msg: "Produto cadastrado"})
    })
})

// Editar um produto no banco de dados
router.put('/:id', async (req,res) => {
    await Product.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        res.status(200).json({msg: "Produto alterado"})
    }).catch((error) => {
        res.status(400).json({msg: "Error:" + error})
    })
})

// Deletar um produto do banco de dados
router.delete('/:id', async (req, res) => {
    await Product.findByIdAndDelete({_id: req.params.id}).then(() => {
        res.status(200).json({msg: "Produto excluido com sucesso!"})
    }).catch((error) => {
        res.status(400).json({msg: "Error" + error})
    })
})


module.exports = router