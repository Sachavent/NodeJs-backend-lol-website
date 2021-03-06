var express = require('express');
var app = express();


// Allow cross origin
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Content-Type', 'application/json');

  next();
});

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// Define the route
app.use('/summoneraccount', require('./routes/summoneraccount'))
app.use('/champions', require('./routes/champions'))


app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});