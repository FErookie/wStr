//这个文件处理入队申请
import {getId} from "../services/authHandler";
const {dispatchMessage, getMyTeamApply, getMyFeedBack, updateMsg, getMsg} = require("../services/msgHandler")
const {joinTeam} = require('../services/teamHandler')
const returns = require('../libs/return');

exports.dispatch = async function (ctx) {
    ctx.checkBody("teamId").notEmpty();

    let user = await ctx.customUser.getUser();
    let id = getId(user.openId);
    await dispatchMessage(id, ctx.request.body.teamId);//我们所看到的消息实际上是发布者 和 申请的队伍的消息
    ctx.returns(returns.code.SUCCESS, null, null);
}

exports.getMessage = async function (ctx) {
    ctx.checkBody("teamId").notEmpty();

    let data = await getMyTeamApply(ctx.request.body.teamId);
    ctx.returns(returns.code.SUCCESS, data, null);
}

exports.getMyFeedBack = async function (ctx) {
    ctx.checkBody("userId").notEmpty();

    let data = await getMyFeedBack(ctx.request.body.userId);
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
}
