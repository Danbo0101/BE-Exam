const Project = require("../models/project")
const apq = require('api-query-params');


const createProject = async (data) => {

    // console.log(data);

    if (data.type === 'EMPTY-PROJECT') {
        try {
            let result = await Project.create(data);
            return result;
        } catch (error) {
            console.log('err', error);
            return null;
        }

    }
    if (data.type === "ADD-USERS") {

        let myProject = await Project.findById(data.projectId).exec();

        for (let i = 0; i < data.userArr.length; i++) {
            myProject.usersInfor.push(data.userArr[i]);
        }

        let result = await myProject.save();
        return result;

    }

    if (data.type === "REMOVE-USERS") {

        let myProject = await Project.findById(data.projectId).exec();

        for (let i = 0; i < data.userArr.length; i++) {
            myProject.usersInfor.pull(data.userArr[i]);
        }

        let result = await myProject.save();
        return result;

    }

    if (data.type === "ADD-TASKS") {
        let myProject = await Project.findById(data.projectId).exec();

        for (let i = 0; i < data.taskArr.length; i++) {
            myProject.tasks.push(data.taskArr[i]);
        }

        let result = await myProject.save();
        return result;
    }
}

const getProjects = async (queryString) => {

    let page = queryString.page;
    let { filter, limit, population } = apq(queryString);
    delete filter.page;
    let offset = (page - 1) * limit;
    let result = await Project
        .find(filter)
        .populate(population)
        .skip(offset)
        .limit(limit)
        .exec();


    return result;
}

const updateProject = async (id, data) => {

    try {
        let result = await Project.updateOne({ _id: id }, { ...data })
        return result;
    } catch (error) {
        console.log('err', error);
        return null;
    }
}

const deleteProject = async (id) => {

    try {
        let result = await Project.deleteById(id);
        return result;
    } catch (error) {
        console.log('err', error);
        return null;
    }
}

module.exports = {
    createProject,
    getProjects,
    updateProject,
    deleteProject
}