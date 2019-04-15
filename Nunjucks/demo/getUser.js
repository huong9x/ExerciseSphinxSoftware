
const nunjucks      = require('nunjucks');
const Router        = require('koa-router');
let   router        = new Router();
const configuration = require('./knexfile')['development']; 
const knex = require('knex')(configuration); 

router.get('/search/:name',async (context,next) => {
    let items = await knex.select('*').from('users').where('user', 'like', '%'+context.params.name+'%');
    context.body = nunjucks.render('index.html',{items});
});

module.exports = router;
