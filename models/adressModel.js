const mongoose = require('mongoose')

const AdressSchema = new mongoose.Schema({

    cep: {
        type: String,
        required: true
    },
    identify: {
        type: String,
        required: true
    },
    road: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    complement: {
        type: String,
        required: true
    },
    reference: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }

    
})

const Adress = mongoose.model('Adress', AdressSchema)
module.exports = Adress