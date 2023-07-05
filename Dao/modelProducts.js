const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        unique:true,
        require:true
    },
    age:{
        type:Number,
        require:true,

    },
    lastName: {
        type:String,
        inique:true,
        require:true
    },
    rol:{
        type:String,
        require:true,
        enum:['user', 'admin']
    }
}) 

const product = mongoose.model('Products', productsSchema)
module.exports = product