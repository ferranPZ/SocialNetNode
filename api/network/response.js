function success(req,res,msg,status) {
    if (!status) {
        let status='200'
    }
    if (!msg) {
        let msg='respuesta exitosa';
    }
    res.status(status).send({
        error:false,
        status: status,
        body: msg
    });
}

function error(req,res,msg,status) {
    if (!status) {
        let status='400'
    }
    if (!msg) {
        let msg='respuesta erronea';
    }
    res.status(status).send({
        error:true,
        status: status,
        body: msg
    });
}

module.exports = {
    success,
    error
}