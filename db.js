const mongoose = require('mongoose')

const URL = 'mongodb+srv://elajman:Sofia9000@@ecommerce.9iohece.mongodb.net/ecommerce'
module.exports = {
    connect: () => {
        return mongoose.connect(URL, {}).then(connection => {
            console.log('conexion a DB exitosa!!')
        }).catch(err => console.log(err))
    }
}