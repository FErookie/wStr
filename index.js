const Koa = require('koa');
const enforceHttps = require('koa-sslify').default;

const router = require('./router/index.js');
let app = new Koa();

app.use(router.routes())
app.use(enforceHttps());

module.exports = app;
