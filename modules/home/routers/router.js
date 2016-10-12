var homeController = require('../controllers/index');
module.exports = function(app, router){
    router.get('/',function *(){
        this.type = 'html';
        yield homeController.index.apply(this);
    });
};