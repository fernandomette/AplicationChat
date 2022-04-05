module.exports = function(applicatiion){
    applicatiion.get('/', function(req, res){
        applicatiion.app.controllers.index.home(applicatiion, req, res);
    });
}