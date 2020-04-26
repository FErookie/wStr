const routerCheck = require('./router-check');
const auth = require('./auth');
const returns = require('./returns');

module.exports = [
    routerCheck,
    returns,
    auth
];
