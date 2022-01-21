require('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')

const routes = require('./routes')

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use(express.static(path.join(__dirname, 'public')));


server.use('/api',routes)

<<<<<<< HEAD
server.use('/', function(req, res){
    res.sendFile('/index.html')
    
=======
server.set('view engine', 'ejs')
server.get('/*' ,(req, res)=>{
    res.render('index')
>>>>>>> 75bdef8ef5534358c01744d9f1ec35c6e55f718e
})

server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando em : http:localhost:${process.env.PORT}`)
})