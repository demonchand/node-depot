var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var MongoClient = require('mongodb').MongoClient;

// require("config/database.js")


// Connect to the db
var _db;
MongoClient.connect("mongodb://localhost:27017/depot_development", function(err, db) {
  if(!err) {
    console.log("We are connected");
    console.log(db)
    _db = db;
  }
});

console.log("next to connection");
console.log(_db);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'ejs');
// app.set('view options', {layout: 'layouts.ejs'});
// app.set("view options", { layout: 'layout' });
// app.set("laouts", true);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);
// app.use('/', routes);

require('./config/routes')(app);

app.get("/nothing", function(req, res) {
  console.log("nothing");
  console.log(_db)
  var products = _db.collection('products');
  products.insert({name: "Rails Intro", description: "Rails depot step by step", price: 12.99})
  res.send("selll");
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
