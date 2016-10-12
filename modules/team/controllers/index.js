exports.index = function *() {
    this.body = yield this.render('/team/views/index',{
        title:'战队排行',
        id:this.params.id
    });
};