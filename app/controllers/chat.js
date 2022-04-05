module.exports.iniciachat = function(applicatiion, req, res){

    let dadorForm = req.body;

    console.log(dadorForm);
    
    res.render("chat");
}