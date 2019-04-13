const nunjucks = require('nunjucks');
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
var router = new Router();


router.get('/hello/:name',(context,next) => {
context.body = nunjucks.render('index.html',{name: context.params.name});
});


app.use(router.routes());
app.listen(8080);
