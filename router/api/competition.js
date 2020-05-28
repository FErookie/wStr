const {getLists, getType, getCompetition} = require("../../controller/competition");

module.exports = (router) => {
    router.get('/public/getTypes', getType);
    router.post('/public/getLists', getLists);
    router.post('/public/getCompetition', getCompetition);
};
