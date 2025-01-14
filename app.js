const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;
const mongoose = require('mongoose');
const Usuario = require('./models/usuarioModel')


app.use(express.static('public'))
app.use(express.json())
/*
app.get('*', (req, res) => {
    res.redirect('/');
})
*/


mongoose.connect('mongodb+srv://admin:9fr2pJfgbNHJ1NVG@cluster0.xbfx86x.mongodb.net/node-api?retryWrites=true&w=majority')
.then(()=> {
    console.log('connected to mongoDB')   
}).catch(()=>{
    console.log(error)
});


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

app.post('/usuario', async (req, res) =>{
    // console.log(req.body)
    // res.send(req.body);
 
    try{
     const usuario = await Usuario.create(req.body)
     res.status(200).json(usuario);
     res.send('ok')
 
    }catch(error){
         console.log(error.message);
         req.status(500).json({message:error.message})
    }
 
 });

 app.get('/hola', (req, res) =>{
    res.send('jjj');

});