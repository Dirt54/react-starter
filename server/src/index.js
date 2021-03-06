var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var clientPath = path.join(__dirname, '../../client');
var api = require('./api');

// var prerender = require('prerender-node');

// prerender.set('prerenderToken', process.env.PRERENDER_KEY);
// app.use(prerender);

app.use(express.static(clientPath));
app.use(bodyParser.json()); 

app.use('/api', api);

function isAsset(path) {
    var pieces = path.split('/');
    if (pieces.length === 0) { return false; }
    var last = pieces[pieces.length - 1];
    if (path.indexOf('/api') !== -1 || path.indexOf('/?') !== -1) {
        return true;
    } else if (last.indexOf('.') !== -1) {
        return true;
    } else {
        return false;
    }
}

app.get('*', function(req, res, next) {
    if (isAsset(req.url)) {
        return next();    
    } else {        
        res.sendFile(path.join(clientPath, 'index.html'));    
    }
}); 


app.listen(process.env.PORT || 8000);