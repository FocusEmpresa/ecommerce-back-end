require('dotenv').config();
const mongoose = require('mongoose')

module.exports = async () => {
    await mongoose.connect(process.env.DATABASE)
    .then(() => console.log('DB connected'))
    .catch((error) => console.log(error))
}