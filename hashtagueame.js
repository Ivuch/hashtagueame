var express = require('express')
var app = express()
var fs = require("fs")
var http = require('http')
var https = require('https')

app.use(express.static(__dirname+"/public"))



app.get('/', function (req, res) {
  res.sendFile(__dirname+'/index.html')
})


app.listen(function, 80 () {
  console.log('Example app listening on port 1234!')
})

/*
//Set port 80 for production, 8080 for dev
http.createServer(function (req, res) {
   // res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    //res.end();
}).listen(80);
*/

/*
var options = {
	key: fs.readFileSync('/etc/letsencrypt/live/www.gmasalud.com.ar/privkey.pem'),
  	cert: fs.readFileSync('/etc/letsencrypt/live/www.gmasalud.com.ar/fullchain.pem'),
  	ca: fs.readFileSync('/etc/letsencrypt/live/www.gmasalud.com.ar/chain.pem')
}


//Set por 443 for production, 4443 for dev
var sserver = https.createServer(options, app).listen(443, function(){
	console.log("Secure conction Established - HTTPS - SSL")
})
*/

