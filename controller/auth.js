const request = require("request");

exports.login = async function(ctx){
    console.log(ctx.request.body);
    ctx.body = '';
};

