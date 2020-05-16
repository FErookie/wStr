//这个文件处理入队申请
const {getId} = require("../services/authHandler");
const {dispatchMessage, getMyTeamApply, getMyFeedBack, updateMsg, getMsg} = require("../services/msgHandler")
const {joinTeam, queryStatus} = require('../services/teamHandler')
const returns = require('../libs/return');

exports.dispatch = async function (ctx) {
    ctx.checkBody("teamId").notEmpty();
    ctx.checkBody("describeText").notEmpty();

    let user = await ctx.customUser.getUser();
    let id = await getId(user.openId);
    let status = await queryStatus(id, ctx.request.body.teamId);
    if (status) {
        await dispatchMessage(id, ctx.request.body.teamId, ctx.request.body.describeText);//我们所看到的消息实际上是发布者 和 申请的队伍的消息
        ctx.returns(returns.code.SUCCESS, null, null);
    } else {
        ctx.returns(returns.code.SUCCESS, "你已经在这个队伍中了 不要重复申请", null);
    }
}

exports.getMessage = async function (ctx) {
    ctx.checkBody("teamId").notEmpty();

    let data = await getMyTeamApply(ctx.request.body.teamId);
    ctx.returns(returns.code.SUCCESS, data, null);
}

exports.getMyFeedBack = async function (ctx) {
    let user = await ctx.customUser.getUser();
    let id = await getId(user.openId);
    let data = await getMyFeedBack(id);
    ctx.returns(returns.code.SUCCESS, data, null);
}

exports.dealMessage = async function (ctx) {
    ctx.checkBody("msgId").notEmpty();
    ctx.checkBody("status").notEmpty();
    ctx.checkBody("describeText").notEmpty();
    if(ctx.request.body.status){
        let data = await getMsg(ctx.request.body.msgId);
        await joinTeam(data.userId, data.teamId);
    }
    await updateMsg(ctx.request.body.msgId, true, ctx.request.body.status, ctx.request.body.describeText);
    ctx.returns(returns.code.SUCCESS, "处理完成", null);

}
