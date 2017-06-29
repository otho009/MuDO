var express = require('express');
var app = express();
var firstLog = true; // Variable pour le login

app.set('view engine', 'ejs');
// Permet de fixer le dossier public comme étant le dossier pour les fichiers statics

// Page d'accueil
app.get('/', function(req, res) {
    res.render('index.ejs');
});

// Page de parametres
app.get('/parametres', function(req, res) {
    res.render('parametres.ejs');
});
app.post('/parametres', function(req, res){
   console.log(req);
   res.send("recieved your request!");
});

app.listen(8080);
console.log('8080 is the magic port');
