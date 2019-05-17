import Application from 'koa';
import Router from 'koa-router';
import indexController from '../controllers/index.controller';
import postController from '../controllers/post.controller';
export = (app: Application) => {
  app.use(async (ctx, next) => indexController(ctx, next));

  app.use(async (ctx, next) => {
    if (ctx.request.url === '/submit') {
      postController(ctx, next);
    }
    await next();
  });

  // add router middleware:
  app.use(new Router().routes());
}