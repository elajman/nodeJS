const mongoose = require('mongoose')

const cartsSchema = new mongoose.Schema({
    name:{
        type:String,
        unique: true,
        require: true
    },
    class:{
        type:String,
        unique: true,
        require: true
    },
    price:{
        type: Number,
        require: true

    },
   
})

const carts = mongoose.model('carts', cartsSchema)
module.exports = carts