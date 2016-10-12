var request = require('co-request');
var config = require('../config/config');
module.exports = function(){
    return request(config.api.team.rank);
};