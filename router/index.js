const Router = require('koa-router');
const utils = require('../utils');

const router = new Router();
utils.autoImport(__dirname + '/api', (tmpPath) => {
    require(tmpPath)(router);
})

module.exports = router;
