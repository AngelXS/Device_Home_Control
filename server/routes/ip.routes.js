const IPController = require('../controllers/IP.controller');

module.exports = function(app){
    app.post('/api/ip/new',IPController.crear);
    app.get('/api/ips',IPController.obtenerIPs);
    app.get('/api/ip/:id',IPController.obtenerIP);
    app.get('/api/ip/:dispositivo/dispositivos',IPController.porDispositivo);
    app.get('/api/ip/:usuario/usuarios',IPController.porUsuario);
    app.put('/api/ip/:id/edit',IPController.actualizarIP);
    app.put('/api/ip/:id/:dirc/ping/edit',IPController.actualizarEstado);
    app.delete('/api/ip/:id/delete',IPController.eliminar);
}