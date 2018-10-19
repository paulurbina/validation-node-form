const mongoose = require('mongoose');
const { Schema } = mongoose;

const Data_client_form = new Schema({
    name: String, 
    apellido: String,
    telefono: Number,
    email: String,
    obsComen: String
});

module.exports = mongoose.model('Data_client_form', Data_client_form);