const express = require('express');
const authRouter = require('./auth.route');
const cardRouter = require('./card.route');
const projectRouter = require('./project.route');

const app = express();

app.use('/auth', authRouter);
app.use('/card', cardRouter);
app.use('/project', projectRouter);

module.exports = app;