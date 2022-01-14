require('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes')

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));

server.use('/api',routes)

server.get('/', function (req,res) {
    res.sendFile('/app/index.html')
    res.sendFile('/app/front-end/src/frt_crud.js')

    
})


server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando em : http:localhost:${process.env.PORT}`)
})