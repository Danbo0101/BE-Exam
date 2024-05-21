const express = require('express')
const routerAPI = express.Router();

const { getUsers, postCreateNewUser, putUpdateUser, deleteUser } = require('../controllers/apiController')

routerAPI.get('/users', getUsers);
routerAPI.post('/users', postCreateNewUser);
routerAPI.put('/users', putUpdateUser);
routerAPI.delete('/users', deleteUser);


module.exports = routerAPI;