const express = require('express');
const routerAPI = express.Router();

const { getUsers, postCreateNewUser, putUpdateUser, deleteUser,
    postUploadSignleFile,
    postUploadMultipleFiles
} = require('../controllers/apiController');

const { postCreateCustomer, postCreateManyCustomer,
    getAllCustomer, putUpdateCustomer, deleteACustomer,
    deleteManyCustomer

} = require('../controllers/customerController');


const { postCreateProject, getProject, putUpdateProject,
    deleteAProject
} = require('../controllers/projectController');

const { postCreateTask, getTask, putUpdateTask, deleteATask } = require('../controllers/taskController');

routerAPI.get('/users', getUsers);
routerAPI.post('/users', postCreateNewUser);
routerAPI.put('/users', putUpdateUser);
routerAPI.delete('/users', deleteUser);
routerAPI.post('/image', postUploadSignleFile);
routerAPI.post('/images', postUploadMultipleFiles);


routerAPI.post('/customers', postCreateCustomer);
routerAPI.post('/customers-many', postCreateManyCustomer);
routerAPI.get('/customers', getAllCustomer);
routerAPI.put('/customers', putUpdateCustomer);
routerAPI.delete('/customers', deleteACustomer);
routerAPI.delete('/customers-many', deleteManyCustomer);


routerAPI.post('/projects', postCreateProject);
routerAPI.get('/projects', getProject);
routerAPI.put('/projects', putUpdateProject);
routerAPI.delete('/projects', deleteAProject);


routerAPI.post('/tasks', postCreateTask);
routerAPI.get('/tasks', getTask);
routerAPI.put('/tasks', putUpdateTask);
routerAPI.delete('/tasks', deleteATask);



module.exports = routerAPI;