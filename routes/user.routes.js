const { Router } = require('express');
const { userGet, userPut, userPost, userDelete, userPatch } = require('../controllers/user.controllers');

const routes = Router();

//Metodo GET: Recuperar datos del servidor
routes.get('/', userGet );

//Metodo PUT: Para actualizar un recurso existente 
routes.put('/:id', userPut);

//Metodo POST: Envia datos al servidor y crea un nuevo recurso
routes.post('/', userPost);

//Metodo DELETE: Elimina un recurso especificado.
routes.delete('/', userDelete);

//Metodo
routes.patch('/', userPatch),

module.exports = routes;