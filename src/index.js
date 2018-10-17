const express = require('express');
var app = express();

//settings
app.set('port', process.env.PORT || 3000);

//Static files
app.use(express.static(__dirname + '/public'));

//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});