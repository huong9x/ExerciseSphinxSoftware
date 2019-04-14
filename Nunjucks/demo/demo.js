const nunjucks = require('nunjucks');
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
var router = new Router();
const configuration = require('./knexfile')['development'];    // require environment's settings from knexfile
const knex = require('knex')(configuration); 

router.get('/search/:name',async (context,next) => {
    let items = await knex.select('*').from('users').where('user', 'like', '%'+context.params.name+'%');
    context.body = nunjucks.render('index.html',{items});
});


app.use(router.routes());
app.listen(8081);
