const Koa = require('koa');
const enforceHttps = require('koa-sslify').default;
const bodyParser = require('koa-bodyParser');
const koaValidate = require('koa-validate');

const router = require('./router/index.js');
const middleWares = require('./middlewares/index');
let app = new Koa();

middleWares.forEach((middleware) => {
    app.use(middleware);
})

app.use(bodyParser());
koaValidate(app);
app.use(router.routes())
app.use(enforceHttps());

module.exports = app;
