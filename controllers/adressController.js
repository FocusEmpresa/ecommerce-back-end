const express = require('express')
const Adress = require('../models/adressModel')
const router = express.Router();

router.post('/register-adress', async (req, res) => {
    // const adressData = ;
    console.log(req.body);
    await Adress.create(req.body).then(() => {
        res.status(200).json({msg: "Endereço criado com sucesso!"})
    }).catch((error) => {
        res.status(400).json({Error: error})
    })
});

module.exports = router;