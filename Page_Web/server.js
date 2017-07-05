var express = require('express');
var app = express();
var bodyParser= require('body-parser');

app.set('view engine', 'ejs');
// Permet de fixer le dossier public comme étant le dossier pour les fichiers statics
app.use(express.static('public'));
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


  // Page d'enregistrement
    app.get('/', function(req, res) {
        res.render('enregistrement.ejs');
    });
   // Page d'acceuil
    app.get('/accueil', function(req, res) {
        res.render('index.ejs');
    });
    // Page de parametres
    app.get('/parametres', function(req, res) {
        res.render('parametres.ejs');
    });


    // personnalisation
    app.post('/parametres', function(req, res){
       console.log(req.body);
       res.send("recieved your request!");
    });
    // configuration du matériel
    app.post('/parametres2', function(req, res){
       console.log(req.body);
       res.send("recieved your request 2!");
    });



app.listen(8080);
console.log('8080 is the magic port');
