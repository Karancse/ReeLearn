const express = require('express')
const app = express()

app.use(express.static("public"));
app.use(express.json());

var fs = require('fs');
var http = require('http');
var https = require('https');

const cors = require('cors');
app.use(cors())

//var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
//var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

/*
var credentials = {
    key: fs.readFileSync(__dirname + '/dist/server/ssl/keys/server.key'),
    cert: fs.readFileSync(__dirname + '/dist/server/ssl/keys/server.crt')
};
*/

const mysql = require('mysql')

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'reelearn'
})

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql connected...\n');
});
/*
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
*/
app.post("/signUp", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let SQL = "INSERT INTO userCredentials (username, password) VALUE ("+username+","+password+")"; 
    db.query(SQL, (err, result) => {
        if(err) throw err;
        res.send('Valid');
    });
})

//app.post("/logIn", (req, res) => {
//    console.log(req);
//})


app.post("/logIn", (req, res) => {
    //console.log(req);
    //console.log(req.body);
    //console.log(req.body1);
    //console.log(req)
    const username = req.body.username;
    const password = req.body.password;

    let SQL = "SELECT * FROM userCredentials WHERE username = \'"+username+"\' AND password = \'"+password+"\'";
    db.query(SQL, (err, result) => {
        if(err) throw err;
        if(result.length==1)
            res.send({
                status: 'Valid'
            });
        else
            res.send({
                status: 'Invalid'
            })
    });
})

/*
var httpsServer = https.createServer(credentials, app);

httpsServer.listen(3001);
*/

app.listen(3001,() => {
    console.log('\nListening to localhost:3001');
});
