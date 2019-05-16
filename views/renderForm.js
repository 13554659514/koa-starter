const nunjucks = require('nunjucks');
nunjucks.configure('views', { autoescape: true });
const htmlRenderFn = (object) => nunjucks.render(`form.html`, object);
module.exports = htmlRenderFn;