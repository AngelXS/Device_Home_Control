const ips = require('../models/ip.model');

module.exports.crear = (request, response) => {
    const { mac, usuario, descripcion, dispositivo, ip, estado, tipo } = request.body;
    ips.create({
        mac, usuario, descripcion, dispositivo, ip, estado, tipo
    })
        .then(registro => response.json({ingresoRegistro: registro, msg: 'Registro ingresado correctamente'}))
        .catch(err => response.status(400).json(err));
}
module.exports.obtenerIPs = (request, response) => {
    ips.find({},null)
        .then(autores => response.json(autores))
        .catch(err=> response.json(err));
}
module.exports.obtenerIP = (request, response) => {
    ips.find({_id: request.params.id})
        .then(registro => response.json(registro))
        .catch(err=> response.json(err));
}
module.exports.actualizarIP = (request,response) => {
    ips.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
        .then(registroActualizado => response.json({registroActualizado: registroActualizado, msg: 'ips actualizado'}))
        .catch(err =>  response.json({err: err, msg: 'Error al actualizar el registro'}));    
}
module.exports.eliminar = (request, response) => {
    ips.deleteOne({_id: request.params.id})
        .then(registroEliminado => response.json({registroEliminado: registroEliminado, msg: 'ips eliminado con éxito'}))
        .catch(err => response.json({err: err, msg: 'Error al eliminar el autor'}));
} 
module.exports.porDispositivo = (request, response)  => {
    ips.find({dispositivo: request.params.dispositivo})
        .then(registros => response.json(registros))
        .catch(err=>response.json(err))
}
module.exports.porUsuario = (request, response)  => {
    ips.find({usuario: request.params.usuario})
        .then(registros => response.json(registros))
        .catch(err=>response.json(err))
}

module.exports.actualizarEstado = (request,response) => {
    {console.log("llega")}
    const util = require('node:util');
    const exec = util.promisify(require('node:child_process').exec);
    pingS().then(val => {
        if(val == '1')
            ips.findOneAndUpdate({_id: request.params.id}, {...request.params, estado: "1"}, {new: true})
                .then(registroActualizado => response.json({registroActualizado: registroActualizado, msg: 'ips actualizado'}))
                .catch(err =>  response.json({err: err, msg: 'Error al actualizar el registro'}));
        else if(val == '2')
            ips.findOneAndUpdate({_id: request.params.id}, {...request.params, estado: "2"}, {new: true})
                .then(registroActualizado => response.json({registroActualizado: registroActualizado, msg: 'ips actualizado'}))
                .catch(err =>  response.json({err: err, msg: 'Error al actualizar el registro'}));
    } );   
    async function pingS() {
        let aux;
        const { stdout } = await exec('ping '+request.params.dirc);
        if(stdout.indexOf("Tiempos aproximados de ida y vuelta en milisegundos") !== -1){
            aux = '1';
        }
        else  {
            aux = '2';
        }
        return aux;      
    }


}