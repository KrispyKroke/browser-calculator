const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;


const calculationsRouter = require('./routes/calculations.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('build'));

app.use('/api/calculations', calculationsRouter);


app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});