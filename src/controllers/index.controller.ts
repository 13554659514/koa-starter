import Application from 'koa';
const renderForm = require('../views/renderForm');
export = async (ctx: Application.BaseContext, next: Function) => {
  ctx.response.type = 'text/html';
  ctx.body = renderForm({ name: 'Hello, nunjucks' });
  await next();
}
