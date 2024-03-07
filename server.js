var express = require('express');

var bodyParser = require('body-parser');

var server = express();

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());



server.get('/', function (req, res){
    res.setHeader('Content-Type','text/html');
    res.status(200).send('<h1>Bonjour</h1>');
});

server.listen(8787, function() {
    console.log('Server mandeha');
});

// sequelize model:create --attributes "id:integer contenu:string idenvoyeur:integer idreceveur:integer" --name Messages