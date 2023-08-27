const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static('public'))

app.get('*', (req, res) => {
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

app.post('/usuario', async (req, res) =>{
     console.log(req.body)
     res.send(req.body);
 });

 app.get('/', (req, res) =>{
    res.send('jjj');

});