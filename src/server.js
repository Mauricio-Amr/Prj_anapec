require('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes')

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));


server.use('/app/front-end/src',express.static('/app/front-end/src'))

server.use('/api',routes)

server.get('/', function (req,res) {
    res.sendFile('/app/index.html')
     
})





server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando em : http:localhost:${process.env.PORT}`)
})