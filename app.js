const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

const port = 3000;

app.listen(process.env.PORT || port , ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});