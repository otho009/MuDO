var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
// Permet de fixer le dossier public comme étant le dossier pour les fichiers statics
app.use(express.static('public'));
// index page
app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.get('/parametres', function(req, res) {
    res.render('parametres.ejs');
});

app.listen(8080);
console.log('8080 is the magic port');
