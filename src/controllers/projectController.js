const { createProject, getProjects, updateProject, deleteProject } = require('../services/projectService');



const postCreateProject = async (req, res) => {

    let result = await createProject(req.body);

    return res.status(200).json({
        EC: 0,
        data: result
    })
}


const getProject = async (req, res) => {

    let result = await getProjects(req.query);

    return res.status(200).json({
        EC: 0,
        data: result
    })
}


const putUpdateProject = async (req, res) => {

    let idProject = req.query.idProject;

    let result = await updateProject(idProject, req.body);

    return res.status(200).json({
        EC: 0,
        data: result
    })

}

const deleteAProject = async (req, res) => {

    let result = await deleteProject(req.query.idProject);

    return res.status(200).json({
        EC: 0,
        data: result
    })

}


module.exports = {
    postCreateProject,
    getProject,
    putUpdateProject,
    deleteAProject
}