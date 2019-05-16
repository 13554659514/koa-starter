const Koa = require('koa')
const app = new Koa()
const bodyparser = require('koa-bodyparser');
const routerFn = require('./routers/router');


app.use(bodyparser());
routerFn(app);


app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})