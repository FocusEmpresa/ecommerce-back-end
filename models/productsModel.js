const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    product: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    max_parcelas: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: false
    }
    
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product