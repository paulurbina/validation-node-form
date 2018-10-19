const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
var app = express();

// Connect Database
mongoose.connect('mongodb://node-form:node-form1994@ds131763.mlab.com:31763/validacion-form-node')
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));


//settings
app.set('port', process.env.PORT || 3000);

// middlewares 
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/', require('./routes/dataform'));

//Static files
app.use(express.static(__dirname + '/public'));

//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

// userdb : node-form
// pass: node-form1994