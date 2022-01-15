require('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes')

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use(express.static("/app/front-end/public"))
server.set('view engine', 'ejs')
server.set('views', '/app/front-end/views')

server.use('/api',routes)

server.use('/', function(req, res){
    res.sendFile('/app/front-end/views/index.html')
    
})

server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando em : http:localhost:${process.env.PORT}`)
})