const express = require('express');
const isAuthenticated  = require('../Middleware/auth.middleware');
const { newProject, editProject, removeProject } = require('../Controller/project.controller');

const router = express.Router();

router.post('/create', isAuthenticated, newProject);
router.delete('/delete', isAuthenticated, removeProject);
router.put('/update', isAuthenticated, editProject);

module.exports = router;