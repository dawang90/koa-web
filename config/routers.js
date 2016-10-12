
var Router = require("koa-router");

var homeController = require("../modules/home/controllers/index");
var teamController = require("../modules/team/controllers/index");


module.exports = function(app){
    var router = new Router();
    router.get('/',function *(){
        this.type = 'html';
        yield homeController.index.apply(this);
    });

    router.get('/team/:id',function *(){
        this.type = 'html';
        yield teamController.index.apply(this);
    });

    app.use(router.routes());
};