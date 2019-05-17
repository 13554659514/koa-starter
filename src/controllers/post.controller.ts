import Application from 'koa';
export = async (ctx: Application.BaseContext, next: Function) => {
    ctx.response.type = 'application/json';
    ctx.response.body = ctx.request.body;
}
