import Application from 'koa';
import Router from 'koa-router';
const renderForm = require('../views/renderForm');
export = (app: Application) => {
  app.use(async (ctx, next) => {
    if (ctx.request.url === '') {
      ctx.response.type = 'text/html';
      ctx.body = renderForm({ name: 'Hello, nunjucks' });
    }
    await next();
  });
  app.use(async (ctx, next) => {
    if (ctx.request.url === '/submit') {
      ctx.response.type = 'application/json';
      ctx.response.body = ctx.request.body;
    }
    await next();
  });

  // add router middleware:
  app.use(new Router().routes());
};
