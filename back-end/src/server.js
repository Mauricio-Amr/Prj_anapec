require('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes')

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));

//arquivos staticos
server.use(express.static("front-end/public"))
server.use('/css', express.static(__dirname +'public/css'))
server.use('/img', express.static(__dirname +'public/img'))
server.use('/js', express.static(__dirname +'public/js'))

//templates
server.set('view engine', 'jsx')
server.set('views', '/app/front-end/views')

server.use('/api',routes)

server.use('/', function(req, res){
    res.sendFile('/index.html')
    
})

server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando em : http:localhost:${process.env.PORT}`)
})