const path = require('path');
const views = require("co-views");

module.exports = function(app){
    app.use(function *(next) {
        this.render = views(path.normalize(path.join(__dirname, "/..")) + '/modules', {
            map: { html: "ejs" }
        });
        yield next;
    });
};