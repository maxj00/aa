const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const bp = require('body-parser');

const Mrli=require('./Mrli');
const edward=require('./edward');
const wsf=require('./wsf');
const chenlong =require('./chenlong');

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next(); 
    }
});

app.use(bp.urlencoded({extended: false}));

io.on('connection', (client) => {
    console.log('io connection');
    client.on('getClientMsg', (msg) => {
        console.log(msg)
        io.emit('print', msg);
    })
    // client.on('');
    // io.emit('')
})

module.exports = {
    start(_port){
        Mrli.register(app);
        edward.register(app);
        wsf.register(app);
        chenlong.register(app);
        http.listen(_port || 8080);
    }
}