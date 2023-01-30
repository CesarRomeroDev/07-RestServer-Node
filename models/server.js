const express = require('express');     //requerimientos de express
const cors = require('cors');           //requerimientos de cors

class Server {      //clase Server
    
    constructor(){  //inicializamos atributos y metodos 
        this.app = express();   //iniciamos express con el nombre de app
        this.port = process.env.PORT;   //inicializamos variables de entorno
        this.usersPath = '/api/users';  //inicializamos variables del path(ruta)
        //middlewares
        this.middlewares();     //inicializamos middlewares.
        //rutas de aplicación
        this.routes();          //inicializamos rutas.
    }

    middlewares(){
        //cors
        this.app.use( cors() );
        //Parseo y lectura de body
        this.app.use( express.json() );  //cualquier información que venga la serializa en json
        //Directorio Publico
        this.app.use( express.static('public') )
    }
    routes() {
        this.app.use(this.usersPath, require('../routes/user.routes'))  //metodo de requerimiento de ruta user.
    }

    listen() {                                                          //metodo para el inicio de servidor.
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}` )   //imprime mensaje de inicio del servidor.
        });
    }
}

module.exports = Server;        //Exportamos clase Server.