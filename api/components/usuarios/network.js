const express = require('express');
const Controller = require('./index');
const response =  require('../../network/response');

const router = express.Router();


router.get('/',async (req,res)=>{
    await  Controller.list()
        .then(
            (data)=>{response.success(req,res,data,'200')},
            (err)=>{response.error(req,res,err,'400')} );
});

router.get('/:id',async (req,res)=>{
    await  Controller.get(req.params.id)
        .then(
            (data)=>{response.success(req,res,data,'200')},
            (err)=>{response.error(req,res,err,'400')} );
});

router.post('/',async (req,res)=>{
    await  Controller.add(req.body)
        .then(
            (data)=>{response.success(req,res,data,'200')},
            (err)=>{response.error(req,res,err,'400')} );
});


module.exports = router;
