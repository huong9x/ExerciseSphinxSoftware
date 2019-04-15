const Koa    = require('koa');
const app    = new Koa();
const router = require('./getUser');

app.use(router.routes());
app.listen(8081);
