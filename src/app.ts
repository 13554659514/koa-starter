import Koa from 'koa';
import routerFn from './routers/router';
const bodyParser  = require('koa-bodyparser');
const app = new Koa();
app.use(bodyParser());
routerFn(app);

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
});
