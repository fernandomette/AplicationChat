module.exports = function(applicatiion){
    applicatiion.post('/Chat', function(req, res){
        applicatiion.app.controllers.chat.iniciachat(applicatiion, req, res);
    });

    applicatiion.get('/Chat', function(req, res){
        applicatiion.app.controllers.chat.iniciachat(applicatiion, req, res);
    });
}