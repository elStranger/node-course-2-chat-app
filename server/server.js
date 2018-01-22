const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname,'../public');

const port = process.env.PORT || 3000;
//__dirname est le 'path' 
//console.log (__dirname + '/../public');
//console.log (publicPath);

var app = express();
//to configue express static middleware
//ce qui veut dire je peux servir dans mon port a cette publicpath 
//....tous les fichiers a l'interieur de ce repertoire

app.use(express.static(publicPath));
app.listen (port, ()=>{
	console.log (`Server is up on ${port}`);
});

