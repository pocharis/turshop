var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors =  require('cors');

app.use(bodyParser.json());
app.use(cors());



const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: false }');
});

require('./app/route/products.route.js')(app);
 
// Create a Server
var server = app.listen(process.env.PORT || 8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})
