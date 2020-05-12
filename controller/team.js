const {getMyTeam, getCompetitionTeam, joinTeam, createTeam} = require('../services/teamHandler');
const returns = require('../libs/return');

exports.getMyTeam = async function(ctx) {
    let user = await ctx.customUser.getUser();
    let res = await getMyTeam(user.openId);
    ctx.returns(returns.code.SUCCESS, res, null);
}

exports.getCompetitionTeam = async function(ctx) {
    ctx.checkBody("offset").notEmpty();
    ctx.checkBody("competitionId").notEmpty();
    let data = ctx.request.body;
    let list = await getCompetitionTeam(data.offset, data.competitionId);
    ctx.returns(returns.code.SUCCESS, list, null);
}

exports.createTeam = async function(ctx) {
    ctx.checkBody("postTime").notEmpty();
    ctx.checkBody("details").notEmpty();
    ctx.checkBody("needPerson").notEmpty();
    ctx.checkBody("finTime").notEmpty();
    ctx.checkBody("competitionId").notEmpty();

    let user = await ctx.customUser.getUser();
    let data = ctx.request.body;
    await createTeam(user.openId, data.postTime, data.details, data.needPerson, data.finTime, data.CompetitionId);
    ctx.returns(returns.code.SUCCESS, null, null);
}

exports.joinTeam = async function(ctx) {
    ctx.checkBody("TeamId").notEmpty();

    let user = await ctx.customUser.getUser();
    await joinTeam(user.openId, ctx.request.body.TeamId);
    ctx.returns(returns.code.SUCCESS, null, null);
}
