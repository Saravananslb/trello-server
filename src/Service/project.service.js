const projectsSchema = require('../Models/project.model');

const createProject = async(name, userId, step, bgColor) => {
    const projectCreate = new projectsSchema({
        name: name,
        userId: userId,
        step: step,
        bgColor: bgColor
    })
    const project = await projectCreate.save();
    return { project: project._doc, status: true };
}

const updateProject = async(body) => {
    const id = body.id;
    delete body.id;
    const updatedProject = await projectsSchema.findByIdAndUpdate(id, {...body});
    console.log(updatedProject);
    return updatedProject;

}

const deleteProject = async(id) => {
    const deleted = await projectsSchema.findByIdAndDelete(id);
    console.log(deleted);
    return deleted;
}


module.exports = {
    createProject,
    updateProject,
    deleteProject
}