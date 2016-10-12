var teamController = require('../controllers/index');
module.exports = function(app, router){
    router.get('/team/:id',function *(){
        this.type = 'html';
        yield teamController.index.apply(this);
    });
}