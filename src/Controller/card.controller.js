const { createCard, updateCard, deleteCard, getProjectAndCards } = require('../Service/card.service');

const newCard = async(req, res) => {
    try {
        const created =  await createCard(req.body);
        res.json(created);
    }
    catch (error){
        res.json(error);
    }
}

const editCard = async(req, res) => {
    try {
        const updated = await updateCard(req.body);
        res.json(updated)
    }
    catch (error){
        res.json(error);
    }
}

const removeCard = async(req, res) => {
    try {
        const deleted = await deleteCard(req.body.id);
        res.json(deleted)
    }
    catch (error){
        res.json(error);
    }
}

const getProjectAndCardsDetails = async(req, res) => {
    try {
        const userId = res.locals.userId;
        const projectAndCard = await getProjectAndCards(userId);
        res.json(projectAndCard);
    }
    catch (error){
        res.json(error);
    }
}

module.exports = {
    newCard,
    editCard,
    removeCard,
    getProjectAndCardsDetails
}