module.exports = function(applicatiion){
    applicatiion.get('/', function(req, res){
        res.send("Teste de Servidor rodando");
    });
}