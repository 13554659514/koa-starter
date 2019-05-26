import { configure, render } from 'nunjucks';
import { nunjucksPath } from '../config';
// 配置 nunjucks
configure(nunjucksPath, { autoescape: true });
const htmlRenderFn = (object: { name: string }) => render(`form.html`, object);
export = htmlRenderFn;
