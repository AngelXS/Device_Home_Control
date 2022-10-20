const mongoose = require('mongoose');
const ipSchema = new mongoose.Schema({
    mac: {
        type: String,
        required: [true, 'Dirección MAC es obligatoria'],
        minlength: [17,'Ingresar correctamente dirección MAC']
    },
    estado: {
        type: String
    },
    tipo: {
        type: String,
        required: [true, 'Seleccionar inalámbrico o cableado']
    },
    usuario: {
        type: String,
        required: [true, 'Usuario es obligatorio'],
    },
    descripcion: {
        type: String,
        required: [true, 'Descipción es obligatorio'],
    },
    dispositivo: {
        type: String,
        required: [true, 'Dispositivo es obligatorio'],
    },
    ip: {
        type: String,
        required: [true, 'IP es obligatorio'],
    }

});
const IPs = mongoose.model('IP', ipSchema);
module.exports = IPs;
