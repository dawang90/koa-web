var request = require('co-request');
exports.index = function *() {
    let result = yield request('http://www.vpgame.com/webservice/v2/team/list?lang=zh_CN&gameType=ow&pageSize=15&page=1&showType=page&country=all&_=1476192092724');

    this.body = yield this.render('/home/views/index',{
        title:'战队排行',
        data:JSON.parse(result.body)
    });
};