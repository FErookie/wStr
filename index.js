const Koa = require('koa');
const enforceHttps = require('koa-sslify').default;
const koaBody = require('koa-body');
const koaValidate = require('koa-validate');

const router = require('./router/index.js');
const middleWares = require('./middlewares/index');
let app = new Koa();

middleWares.forEach((middleware) => {
    app.use(middleware);
})


app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 50 * 1024 * 1024
    }
}));
koaValidate(app);
app.use(router.routes())
app.use(enforceHttps());

module.exports = app;
