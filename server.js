const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');

app.use(bodyParser.json());




app.get('/', (req, res) => {
    res.send("This is my first server");
});



const personRoutes =require('./routes/personRoutes');
const menuItem=require('./routes/menuRoutes');
app.use('/person',personRoutes)
app.use('/menu',menuItem)

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
