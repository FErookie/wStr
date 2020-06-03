//这个文件处理入队申请
const {getId} = require("../services/authHandler");
const {dispatchMessage, getMyTeamApply, getMyFeedBack, updateMsg, getMsg, deleteMessage} = require("../services/msgHandler")
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

exports.deleteMessage = async function (ctx) {
    //要撤销一个申请
    //如果已经申请被处理 已经加入了队伍 就新建一个申请 告知队伍的组织者 现在想要退出
    //如果没有被处理 就删除掉 对应message
    ctx.checkBody("msgId").notEmpty();

    let status = await deleteMessage(ctx.request.body.msgId);
    if(status === false) {
        ctx.returns(ctx.code.SUCCESS, '撤回成功', null);
    } else {
        let user = await ctx.customUser.getUser();
        let id = await getId(user.openId);
        await dispatchMessage(id, status, "希望退出队伍");
        ctx.returns(ctx.code.SUCCESS, '已经提出退出队伍的申请，等待队长删除队员', null);
    }
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
