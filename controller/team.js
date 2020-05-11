const {getMyTeam, getCompetitionTeam, joinTeam, createTeam} = require('../services/teamHandler');

exports.getMyTeam = async function(ctx) {
    let user = await ctx.customUser.getUser();
    let res = await getMyTeam(user.openId);
    ctx.returns(ctx.code.SUCCESS, res, null);
}

exports.getCompetitionTeam = async function(ctx) {
    ctx.checkBody("offset");
    ctx.checkBody("competitionId");
    let data = ctx.request.body;
    let list = await getCompetitionTeam(data.offset, data.competitionId);
    ctx.returns(ctx.code.SUCCESS, list, null);
}

exports.createTeam = async function(ctx) {
    ctx.checkBody("postTime");
    ctx.checkBody("details");
    ctx.checkBody("needPerson");
    ctx.checkBody("finTime");
    ctx.checkBody("competitionId");

    let user = await ctx.customUser.getUser();
    let data = ctx.request.body;
    await createTeam(user.openId, data.postTime, data.details, data.needPerson, data.finTime, data.CompetitionId);
    ctx.returns(ctx.code.SUCCESS, null, null);
}

exports.joinTeam = async function(ctx) {
    ctx.checkBody("TeamId");

    let user = await ctx.customUser.getUser();
    await joinTeam(user.openId, ctx.request.body.TeamId);
    ctx.returns(ctx.code.SUCCESS, null, null);
}
