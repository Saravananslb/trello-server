const { createProject, updateProject, deleteProject } = require('../Service/project.service');

const newProject = async(req, res) => {
    try {
        const name = req.body.name;
        const step = req.body.step || [];
        const userId = res.locals.userId;
        const bgColor = req.body.bgColor || '';
        const created =  await createProject(name, userId, step, bgColor);
        res.json(created);
    }
    catch (error){
        res.json(error);
    }
}

const editProject = async(req, res) => {
    try {
        const updated = await updateProject(req.body);
        res.json(updated)
    }
    catch (error){
        res.json(error);
    }
}

const removeProject = async(req, res) => {
    try {
        const deleted = await deleteProject(req.body.id);
        res.json(deleted)
    }
    catch (error){
        res.json(error);
    }
}

module.exports = {
    newProject,
    editProject,
    removeProject
}