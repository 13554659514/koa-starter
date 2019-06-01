import Koa from 'koa';
import server from 'koa-static';
import path from 'path';
import loggerFn from './middleware/logger.middleware';
import routerFn from './routers/router';

// @SEE Type Middleware in @Koa：
// type Middleware<T> = (context: T, next: () => Promise<any>) => any;


// parse http request body
const bodyParser = require('koa-bodyparser');
const app = new Koa();
app.use(bodyParser());
// using logger middleware
app.use(loggerFn);

// 配置静态资源目录
const staticPath = '/static/';
// 使用 静态服务器 中间件
app.use(server(
  path.join(__dirname, staticPath),
));



routerFn(app);
app.listen(3000, () => { console.log(123); });
