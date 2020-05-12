const {getLists, getType} = require("../../controller/competition");

module.exports = (router) => {
    router.get('/public/getTypes', getType);
    router.post('/public/getLists', getLists);
};
