const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const config = require('./config.js');
const envConfig = require('./env/config_development.json');
var session = require("express-session");
// view engine setup
app.set('views', './app/views');
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser("session"));
app.use(session({
    secret: 'session',//与cookieParser中的一致
    resave: true,
    saveUninitialized:true
}));
app.use(express.static('../public'));

//Cross origin
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With,X-Powered-By,Content-Type");
    if (req.method === 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

// Globbing express routing files
config.getGlobbedFiles('./app/routes/**/*.js').forEach(function(routePath) {
    require(path.resolve(routePath))(router);
});
app.use(envConfig.NJ_DOM_CEAT.context, router);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
}
);

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    var json = {};
    json.message = err.message;
    json.status = (err.status) ? err.status : 500;
    // render the error page
    res.status(err.status || 500);
    res.json(json);
});


exports = module.exports = app;
