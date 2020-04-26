module.exports = async (ctx, next) => {
    const isPublic = /^\/public\//;
    ctx.customeNeedToken = !isPublic.test(ctx.request.url);
    await next();
    ctx.customeNeedToken = null;
};
