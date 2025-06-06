const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        unique:true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    otp: {
        type: String 
    },
    otpExpiresAt: {
        type: Date
    }
},{ timestamps: true })

module.exports = mongoose.model("user",userSchema)