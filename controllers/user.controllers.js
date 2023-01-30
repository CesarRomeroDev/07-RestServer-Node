const { response, request } = require('express')

const userGet = (req = request, res = response) => {
    const { q, nombre = 'No Name', apikey, page = 1, limit } = req.query;

    res.json({
        'msg': 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const userPut = (req, res = response) => {      //controlador PUT Para actualizar un recurso existente
    const id = req.params.id;                   //Requerimiento de parametro(params)en la url a través de si id

    res.json({
        'msg': 'put API - controlador',
        id                                      //Respuesta de la url
    })
}

const userPost = (req, res = response) => {     //controlador POST Envia datos al servidor y crea un nuevo recurso
    const { nombre, edad } = req.body;          //Requerimos información de front y destructuramos lo que necesitamos.

    res.json({                                  //Respuesta json
        'msg': 'post API - controlador',        //Respuesta en texto  
        nombre,                                 //Respuesta requerida del body
        edad                                    //Respuesta requerida del body
    })
}

const userDelete = (req, res = response) => {
    res.json({
        'msg': 'delete API - controlador'
    })
}

const userPatch = (req, res = response) => {
    res.json({
        'msg': 'patch API - controlador'
    })
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch
}