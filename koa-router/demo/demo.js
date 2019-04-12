var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router({
  prefix: '/home'
});


router
  .get('/sign-in', (ctx, next) => {
    return ctx.body = 'Sign in to view content!';
  })
  .get('/', (ctx, next) => {
    return ctx.body = 'Home';
  })
  .post('user', '/users:id', (ctx, next) => {
    return ctx.body = '0';
  })
  .put('/users/:id', (ctx, next) => {
    return ctx.body = '1';
  })
  .del('/users/:id', (ctx, next) => {
    return ctx.body = '2';
  })
  .all('/users/:id', (ctx, next) => {
    ctx.body = '3';
  });
  router.redirect('/login', '/home/sign-in');
  
app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(6967);
