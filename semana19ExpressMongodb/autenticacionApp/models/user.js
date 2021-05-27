const mongoose = require('mongoose')
const Schema = mongoose.Schema

//conexion hacia mongodb
mongoose.connect('mongodb://localhost:27017/autenticacionApp',{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> console.log('Conectado a mongodb'))
    .catch(e=> console.log('Error de conexion', e))

const userSchema = new Schema({
    fullName: String,
    email: String,
    password: String
})

//crear el modulo
const User = mongoose.model('User', userSchema)

module.exports=User