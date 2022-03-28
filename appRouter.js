const express = require('express');

let router = express.Router();

router.get('/:usecase/:operation/:id', function (request, response) {
    console.log('App Router GET method');
    let op = request.params.operation;
    if ('save' == op) {
        response.status(400).send('Http Get is not allowed');
        return;
    }

    callController(request, response, op);
});


function callController(request, response, op) {
    let usecase = request.params.usecase + "Ctl()";
    let ctl = eval("new " + usecase);
    let exp = "ctl." + op + "(request, response)";
    eval(exp);
}

module.exports = router;