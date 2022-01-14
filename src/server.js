require('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes')

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.set('view engine', 'ejs')

server.use('/api',routes)

server.use('/', function(req, res, next){
    res.render('app/index')
    next()
})



server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando em : http:localhost:${process.env.PORT}`)
})