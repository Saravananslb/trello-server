const {
  createCard,
  updateCard,
  deleteCard,
  getProjectAndCards,
} = require("../Service/card.service");

const newCard = async (req, res) => {
  try {
    const created = await createCard(req.body);
    res.json(created);
  } catch (error) {
    res.json({ error: "Cannot able to create card" });
  }
};

const editCard = async (req, res) => {
  try {
    const updated = await updateCard(req.body);
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ error: "Cannot able to update data" });
  }
};

const removeCard = async (req, res) => {
  try {
    const deleted = await deleteCard(req.body.id);
    res.json(deleted);
  } catch (error) {
    res.json(error);
  }
};

const getProjectAndCardsDetails = async (req, res) => {
  try {
    const userId = res.locals.userId;
    const projectAndCard = await getProjectAndCards(userId);
    res.status(200).json(projectAndCard);
  } catch (error) {
    res.status(400).json({ error: "Cannot get data" });
  }
};

module.exports = {
  newCard,
  editCard,
  removeCard,
  getProjectAndCardsDetails,
};
