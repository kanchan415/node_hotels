const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();


const bodyParser = require('body-parser');
app.use(bodyParser.json());


const PORT=process.env.PORT || 3000


app.get('/', (req, res) => {
    res.send("This is my first server");
});



const personRoutes =require('./routes/personRoutes');
const menuItem=require('./routes/menuRoutes');
app.use('/person',personRoutes)
app.use('/menu',menuItem)



app.listen(PORT, () => {
    console.log("Listening on port 3000");
});
