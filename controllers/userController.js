const express = require('express')
const User = require('../models/userModel')
const router = express.Router();
const cryptPassword = require('../utils/bcrypt')

// Criar user no banco de dados
router.post('/register', async (req, res) => {
    const userData = req.body;
    userData.typeAccess = 'NORMAL'

    const userDB = await User.findOne({email: userData.email})
    if(userDB) {
        return res.status(500).json({msg: "Email já cadastrado no banco de dados!"})
    } 
    
    const passwordCrypted = cryptPassword.bcryptPassword(userData.password);
    userData.password = passwordCrypted;

    await User.create(userData).then(() => {
        res.status(200).json({msg: "Usuário criado com sucesso!"})
    }).catch((error) => {
        res.status(400).json({Error: error})
    })

})

// Fazer autenticação do usuário com banco de dados e criar sistema de sessão acoplado
router.post('/login', async (req, res) => {

    const user = await User.findOne({email: req.body.email})
    
    if(!user) {
        return res.status(400).json("Usuário não existe!")
    } 

    if(cryptPassword.comparePassword(req.body.password, user.password)) {
        return res.status(200).json("Usuário logado com sucesso!")
    } else {
        return res.status(400).json("Senha inválida!")
    }
})

// Get user logged
router.get('/getUser/:email', async (req, res) => {
    const email = req.params.email
    const user = await User.findOne({email: email})
    return res.status(200).json({user: user})
})

router.get('/getUser',async(req,res)=>{
    const allUser = await User.find({}).select("-password")
    return res.status(200).json(allUser);
})


// Alterar typeAccess do usuário no banco de dados




module.exports = router