const express = require('express');

let router = express.Router();

router.get('/',(req,res)=>{
    res.send('AuthRouter running')
})

module.exports = router;