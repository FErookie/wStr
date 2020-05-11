const {getType, getTypeCompetition} = require('../services/CompHandler');

exports.getType = async function(ctx) {
    let res = await getType();
    ctx.returns(ctx.code.SUCCESS, res, null);
};

exports.getLists = async function(ctx) {
    ctx.checkBody("offset").isNotNull();
    ctx.checkBody("type").isNotEmpty();
    let data = ctx.request.data;
    let content = await getTypeCompetition(data.type, data.offset);
    ctx.returns(ctx.code.SUCCESS, content, null);
};
