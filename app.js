var koa = require('koa');
var router = require('koa-router')();
var serve = require('koa-static');
var app = koa();

// x-response-time

app.use(function *(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function *(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

// static
app.use(serve(__dirname + '/public'));

// response
require('./config/koa')(app);
// Routes
require('./config/routers')(app);
//router.get('/', function *(next) {
//    this.type = 'ejs';
//    this.body = yield this.render("index");
//});
//
//app.use(router.routes());
//app.use(router.allowedMethods());

app.on('error', function(err, ctx){
    console.error('server error', err, ctx);
});


app.listen(3000);