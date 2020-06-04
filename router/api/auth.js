const {login, updateInfo, getInfo} = require("../../controller/auth");

module.exports = (router) => {
    router.post('/public/login', login);
    router.post('/auth/updateInfo', updateInfo);
    router.post('/auth/getInfo', getInfo);
};
