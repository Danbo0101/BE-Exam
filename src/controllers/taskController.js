const { createTask, getTasks, updateTask, deleteTask } = require("../services/taskService");


const postCreateTask = async (req, res) => {
    let result = await createTask(req.body);

    return res.status(200).json({
        EC: 0,
        data: result
    })

}


const getTask = async (req, res) => {
    let result = await getTasks(req.query);

    return res.status(200).json({
        EC: 0,
        data: result
    })
}

const putUpdateTask = async (req, res) => {
    let idTask = req.query.idTask;

    let result = await updateTask(idTask, req.body);

    return res.status(200).json({
        EC: 0,
        data: result
    })
}

const deleteATask = async (req, res) => {

    let result = await deleteTask(req.query.idTask);

    return res.status(200).json({
        EC: 0,
        data: result
    })
}

module.exports = {
    postCreateTask, getTask, putUpdateTask, deleteATask
}