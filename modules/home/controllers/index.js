//var request = require('co-request');
//var config = require('../../../config/config');
var getTeamLists = require('../../../services/getTeamLists');
exports.index = function *() {
    let result = yield getTeamLists();
    this.body = yield this.render('/home/views/index',{
        title:'战队排行',
        data:JSON.parse(result.body)
    });
};