const express = require('express')
const User = require('../models/userModel')
const router = express.Router();
const cryptPassword = require('../utils/bcrypt')

// Criar user no banco de dados
router.post('/register', (req, res) => {
    const userData = req.body;

    const userDB = User.findOne({email: userData.email})
    if(userDB) {
        res.status(500).json({msg: "Email já cadastrado no banco de dados!"})
    } else {

        const passwordCrypted = cryptPassword.bcryptPassword(userData.password);
        userData.password = passwordCrypted;
        
        User.create(req.body).then(() => {
            res.status(200).json({msg: "Usuário criado com sucesso!"})
        }).catch((error) => {
            res.status(400).json({Error: error})
        })

    }

})

// Fazer autenticação do usuário com banco de dados e criar sistema de sessão acoplado


// Fazer sistema de logout


// Alterar typeAccess do usuário no banco de dados




module.exports = router