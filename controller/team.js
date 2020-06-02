const {getMyTeam, getCompetitionTeam, joinTeam, createTeam, getCompetitionTeamDetails, getTeamDetails} = require('../services/teamHandler');
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

exports.getAllTeam = async function(ctx) {
    ctx.checkBody("offset").notEmpty();
    let data = ctx.request.body;
    let list = await getCompetitionTeamDetails(data.offset, null, data.limit, data.schoolName);
    ctx.returns(returns.code.SUCCESS, list, null);
}

exports.getTeamDetails = async function(ctx) {
    ctx.checkBody("teamID");
    let data = ctx.request.body;
    let content = await getTeamDetails(data.teamID);
    ctx.returns(returns.code.SUCCESS, content, null);
}

exports.getCompetitionTeamDetails = async function(ctx) {
    ctx.checkBody("competitionId").notEmpty();
    let data = ctx.request.body;
    let content = await getCompetitionTeamDetails(data.offset, data.competitionId, data.limit, data.schoolName);
    ctx.returns(returns.code.SUCCESS, content, null);
}


exports.createTeam = async function(ctx) {
    ctx.checkBody("postTime").notEmpty();
    ctx.checkBody("details").notEmpty();
    ctx.checkBody("needPerson").notEmpty();
    ctx.checkBody("finTime").notEmpty();
    ctx.checkBody("competitionId").notEmpty();

    let user = await ctx.customUser.getUser();
    let data = ctx.request.body;
    console.log(data.competitionId);
    await createTeam(user.openId, data.postTime, data.details, data.needPerson, data.finTime, data.competitionId);
    ctx.returns(returns.code.SUCCESS, null, null);
}

exports.acceptNewUser = async function(ctx) {
    ctx.checkBody("TeamId").notEmpty();
    ctx.checkBody("UserId").notEmpty();

    await joinTeam(ctx.request.body.UserId, ctx.request.body.TeamId);
    ctx.returns(returns.code.SUCCESS, null, null);
}

