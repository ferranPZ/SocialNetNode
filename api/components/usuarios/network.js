const express = require('express');
const controller = require('./controller');
const response =  require('../../network/response');

const router = express.Router();


router.get('/',(req,res)=>{
    controller.getUsers()
        .then((data)=>{
            response.success(req,res,data,'200');
        })
        .catch((e)=>{
            response.error(req,res,e,'400');
        })
});



module.exports = router;
