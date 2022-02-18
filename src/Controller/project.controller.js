const {
  createProject,
  updateProject,
  deleteProject,
} = require("../Service/project.service");

const newProject = async (req, res) => {
  try {
    const name = req.body.name;
    const step = req.body.step || [];
    const userId = res.locals.userId;
    const bgColor = req.body.bgColor || "";
    const created = await createProject(name, userId, step, bgColor);
    res.status(200).json(created);
  } catch (error) {
    res.status(400).json({ error: "Cannot create new project" });
  }
};

const editProject = async (req, res) => {
  try {
    const updated = await updateProject(req.body);
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ error: "Cannot update project" });
  }
};

const removeProject = async (req, res) => {
  try {
    const deleted = await deleteProject(req.body.id);
    res.status(200).json(deleted);
  } catch (error) {
    res.status(400).json({ error: "Cannot remove project" });
  }
};

module.exports = {
  newProject,
  editProject,
  removeProject,
};
