const routerCheck = require('./router-check');
const auth = require('./auth');
const returns = require('./returns');
const err = require('./err');

module.exports = [
    routerCheck,
    returns,
    auth,
    err
];
