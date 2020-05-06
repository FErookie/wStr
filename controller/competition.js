const {getType, getTypeCompetition} = require('../services/CompHandler');

exports.getType = async function(ctx) {
    let res = await getType();
    ctx.return(ctx.code.SUCCESS, res, null);
};

exports.getLists = async function(ctx) {
    ctx.checkBody("offset").isNotNull();
};
