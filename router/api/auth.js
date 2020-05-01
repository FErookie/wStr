const {login} = require("../../controller/auth");

module.exports = (router) => {
    router.post('/public/login', login);
};
