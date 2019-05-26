import Koa from 'koa';
import server from 'koa-static';
import routerFn from './routers/router';
// import { bodyParser } from 'koa-bodyparser';
const bodyParser = require('koa-bodyparser');
const path = require('path');
const app = new Koa();
app.use(bodyParser());

// 配置静态资源
const staticPath = '/static/';
app.use(server(
  path.join(__dirname, staticPath),
));
routerFn(app);
// console.log(path.join(__dirname, staticPath));
app.listen(3000, () => {
  // console.log("server is running at http://localhost:3000");
  // console.log(`see assets at http:localhost:3000/images/vscode.png`);
});
