const auth = require("../../controller/auth");

module.exports = (router) => {
    router.post('/public/login', auth.login);
};
