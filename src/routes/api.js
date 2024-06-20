const express = require('express')
const routerAPI = express.Router();

const { getUsers, postCreateNewUser, putUpdateUser, deleteUser,
    postUploadSignleFile
} = require('../controllers/apiController')

routerAPI.get('/users', getUsers);
routerAPI.post('/users', postCreateNewUser);
routerAPI.put('/users', putUpdateUser);
routerAPI.delete('/users', deleteUser);
routerAPI.post('/image', postUploadSignleFile);



module.exports = routerAPI;