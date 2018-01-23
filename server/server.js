const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require ('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
//__dirname est le 'path' 
//console.log (__dirname + '/../public');
//console.log (publicPath);

var app = express();
//app.listen est la meme, mais celle la est explicite 
var server = http.createServer(app);
//listen to even with this
var io = socketIO(server);
//to configue express static middleware
//ce qui veut dire je peux servir dans mon port a cette publicpath 
//....tous les fichiers a l'interieur de ce repertoire
app.use(express.static(publicPath));
//listen to even connection
io.on('connection', (socket)=>{
	console.log('New user connected');
	socket.on('disconnect', ()=>{
		console.log ('User was disconnected');
	});
});


server.listen (port, ()=>{
	console.log (`Server is up on ${port}`);
});

