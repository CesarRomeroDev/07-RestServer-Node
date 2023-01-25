const express = require('express');

class Server {
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        //middlewares
        this.middlewares();
        //rutas de aplicación
        this.routes();
    }

    middlewares(){
        //Directorio Publico
        this.app.use( express.static('public') )
    }
    routes() {
        this.app.get('/api', (req, res) => {    //Metodo GET: Recuperar datos del servidor
            res.status(403).json({
                'msg': 'get API'
            });
        })
        this.app.put('/api', (req, res) => {    //Metod PUT: Para actualizar un recurso existente
            res.status(500).json({
                'msg': 'put API'
            });
        })
        this.app.post('/api', (req, res) => {   //Metodo POST: Envia datos al servidor y crea un nuevo recurso
            res.status(201).json({
                'msg': 'post API'
            });
        })
        this.app.delete('/api', (req, res) => { //Metodo DELETE: Elimina un recurso especificado.
            res.status(403).json({
                'msg': 'delete API'
            });
        })
        this.app.patch('/api', (req, res) => {  //Metodo 
            res.status(403).json({
                'msg': 'patch API'
            });
        })
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}` )
        });
    }
}

module.exports = Server;