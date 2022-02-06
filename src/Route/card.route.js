const express = require('express');
const isAuthenticated  = require('../Middleware/auth.middleware');
const { newCard, editCard, removeCard, getProjectAndCardsDetails } = require('../Controller/card.controller');

const router = express.Router();

router.post('/create', isAuthenticated, newCard);
router.delete('/delete', isAuthenticated, removeCard);
router.put('/update', isAuthenticated, editCard);
router.get('/project-cards', isAuthenticated, getProjectAndCardsDetails)

module.exports = router;