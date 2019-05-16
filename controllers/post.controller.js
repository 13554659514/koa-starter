module.exports = async (ctx, next) => {
    ctx.response.type = 'application/json';
    ctx.response.body = ctx.request.body;
}
