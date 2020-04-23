const auth = require("../../controller/auth");

module.exports = (router) => {
    router.post('/login', auth.login);
}
