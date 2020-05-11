const {login, updateInfo} = require("../../controller/auth");

module.exports = (router) => {
    router.post('/public/login', login);
    router.post('/auth/updateInfo', updateInfo);
};
