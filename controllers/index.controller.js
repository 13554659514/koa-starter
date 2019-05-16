const renderForm = require('../views/renderForm');
module.exports =  async (ctx, next) => {
  ctx.response.type = 'text/html';
  ctx.body = renderForm({name: 'Hello, nunjucks'});
  await next();
}
