const router = require('koa-router')();
const indexController = require('../controllers/index.controller');
const postController = require('../controllers/post.controller');
module.exports = (app) => {
  app.use( async (ctx, next) => indexController(ctx, next));

    app.use(async (ctx, next) => {
        if (ctx.request.url === '/submit') {
          postController(ctx, next);
        }
        await next();
    });

    // add router middleware:
    app.use(router.routes())
}