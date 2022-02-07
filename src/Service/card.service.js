const cardSchema = require('../Models/cards.model');
const projectsSchema = require('../Models/project.model');

const createCard = async(body) => {
    const card = new cardSchema({
        ...body
    });
    const createdCard = await card.save();
    return createdCard._doc;
}

const updateCard = async(body) => {
    const id = body.id;
    delete body.id;
    const update = await cardSchema.findByIdAndUpdate(id, {...body});
    console.log(update);
    return update;
}

const deleteCard = async(id) => {
    const deleteCrd = await cardSchema.findByIdAndDelete(id);
    console.log(deleteCrd);
    return deleteCrd;
}

const getProjectAndCards = async(userId) => {
    const stepIds = [];
    const project = await projectsSchema.find({ userId: userId });
    if (!project) return [];
    const projectStep= project[0].step;
    projectStep.map(item => stepIds.push(item.id));
    const card = await cardSchema.find();
    const cards = card.filter(item => stepIds.includes(item.stepId));
    return {
        projectName: project[0].name,
        bgColor: project[0].bgColor,
        step: projectStep,
        cards: cards
    };
    
}

module.exports = {
    createCard,
    updateCard,
    deleteCard,
    getProjectAndCards
}