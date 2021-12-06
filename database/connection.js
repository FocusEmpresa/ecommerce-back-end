require('dotenv').config();
const mongoose = require('mongoose')

// Criar conexão com banco de dados
module.exports = async () => {
    await mongoose.connect(process.env.DATABASE)
    .then(() => console.log('DB connected'))
    .catch((error) => console.log(error))
}