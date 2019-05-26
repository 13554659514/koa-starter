import Application from 'koa';
export = async (ctx: Application.BaseContext, next: () => any) => {
    ctx.response.type = 'application/json';
    ctx.response.body = ctx.request.body;
};
