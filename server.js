const express = require('express'),

//    port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const app = express(),
const db = require('./database');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    next();
});

app.get('/', function(req, res) {
    db.getData()
    .then(data => {
        res.end(JSON.stringify(data))
    })
    .catch(error => console.log(error));
});

app.post('/addData', function(req, res) {
    addData(req, res);
});


let addData = (req, res) => {
    let data = req.body;
    db.addData(data.time, data.temp, data.humidity, data.ambLight)
    .then(() => res.end('New data stored'))
    .catch(error => {
        console.log(error);
        res.end('Failed to store data');
    });
};

app.listen(process.env.PORT || 5000);
console.log('server started...');

