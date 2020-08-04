const express = require('express');
const config = require('./config');
const usuarios = require('./components/usuarios/network');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/api/usuarios',usuarios);

app.listen(config.api.port,()=>{
    console.log("servidor acotivo en el puerto 3000")
});