const apq = require('api-query-params');
const Task = require('../models/task');

const createTask = async (data) => {
    try {
        let result = await Task.create(data);
        return result;
    } catch (error) {
        console.log("err", error);
        return null;
    }
}

const getTasks = async (queryString) => {

    let page = queryString.page;

    let { filter, limit } = apq(queryString);
    delete filter.page;
    let offset = (page - 1) * limit;
    try {
        let result = await Task.find(filter).skip(offset).limit(limit).exec();
        return result;
    } catch (error) {
        console.log('err', error);
        return null;
    }
}

const updateTask = async (idTask, data) => {
    try {
        let result = await Task.updateOne({ _id: idTask }, { ...data });
        return result;
    } catch (error) {
        console.log('err', error);
        return null;
    }
}

const deleteTask = async (idTask) => {
    try {
        let result = Task.deleteById(idTask);
        return result;
    } catch (error) {
        console.log('err', error);
        return null;
    }
}




module.exports = {
    createTask, getTasks, updateTask, deleteTask
}