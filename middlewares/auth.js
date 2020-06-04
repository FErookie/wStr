const User = require('../libs/user');
const returns = require('../libs/return');

module.exports = async (ctx, next) => {
    if (ctx.customeNeedToken) {
        console.log(ctx.request.headers.hasOwnProperty('token'));
        if (ctx.request.headers.hasOwnProperty('token')) {
            ctx.customUser = new User(ctx.request.headers['token']);
            if ((await ctx.customUser.getUser()) === null) {
                ctx.returns(returns.code.INVALID_TOKEN, null, 'the TOKEN is time out');
                return;
            }
        } else {
            ctx.returns(returns.code.MISSING_TOKEN, null, 'the request need token');
            return;
        }
    }
    await next();
    ctx.customUser = null;
};
