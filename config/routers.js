
var Router = require("koa-router");



module.exports = function(app){
    var router = new Router();
    require("../modules/home/routers/router")(app, router);
    require("../modules/team/routers/router")(app, router);
    app.use(router.routes());
};