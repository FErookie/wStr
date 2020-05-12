//这个文件处理入队申请
const {dispatchMessage, getMyTeamApply} = require("../services/msgHandler")
const returns = require('../libs/return');

exports.dispatch = async function (ctx) {
    ctx.checkBody("teamId").notEmpty();

    let user = await ctx.customUser.getUser();
    await dispatchMessage(user.openId, ctx.request.body.teamId);
    ctx.returns(returns.code.SUCCESS, null, null);
}

exports.getMessage = async function(ctx) {
    ctx.checkBody("teamId").notEmpty();

    let data = await getMyTeamApply(ctx.request.body.teamId);
    ctx.returns(returns.code.SUCCESS, data, null);
}
