const {getType, getTypeCompetition, getCompetition} = require('../services/CompHandler');
const returns = require('../libs/return');

exports.getType = async function(ctx) {
    let res = await getType();
    ctx.returns(returns.code.SUCCESS, res, null);
};

exports.getLists = async function(ctx) {
    ctx.checkBody("offset").notEmpty();
    ctx.checkBody("type").notEmpty();
    let data = ctx.request.body;
    let content = await getTypeCompetition(data.type, data.offset);
    ctx.returns(returns.code.SUCCESS, content, null);
};

exports.getCompetition = async function(ctx) {
    ctx.checkBody("competitionId").notEmpty();
    let cid = ctx.request.body.competitionId;
    let content = await getCompetition(cid);
    ctx.returns(returns.code.SUCCESS, content, null);
}

