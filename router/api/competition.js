const {getLists, getType} = require("../../controller/competition");

module.exports = (router) => {
    router.get('/competition/getTypes', getType);
    router.post('/competition/getLists', getLists);
};
