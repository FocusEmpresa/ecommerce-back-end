const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    typeAccess: {
        type: String,
        required: true
    }
    
})

const User = mongoose.model('User', UserSchema)
module.exports = User