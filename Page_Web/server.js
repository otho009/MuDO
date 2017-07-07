var express = require('express');
var app = express();
var bodyParser= require('body-parser');
var session = require('express-session');
var verfication={'login': 'admin' , 'password': 'admin' };
var sess;

app.set('view engine', 'ejs');
// Permet de fixer le dossier public comme étant le dossier pour les fichiers statics
app.use(express.static('public'));
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(session({
  secret: 'seeecret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
// Authentication and Authorization Middleware
var auth = function(req, res, next) {
  if (sess && sess.logedIn )
    return next();
  else
    return res.sendStatus(401);
};

  // Page d'enregistrement
    app.get('/', function(req, res) {
      sess= req.session;
        res.render('enregistrement.ejs');
    });
   // Page d'acceuil
    app.get('/accueil', auth, function(req, res) {
        res.render('index.ejs');
    });
    // Page de parametres
    app.get('/parametres', auth, function(req, res) {
        res.render('parametres.ejs');
    });


    // personnalisation
    app.post('/parametres',auth,function(req, res){
       console.log(req.session);
    });
    // configuration du matériel
    app.post('/parametres2',auth,function(req, res){
       console.log(req.body);
       res.send("recieved your request 2!");
    });
    app.post('/', function(req, res){
      sess.email= req.body.email;
      sess.password= req.body.password;
      console.log(sess.email);

      if (sess.email== verfication.login && sess.password == verfication.password){
         sess.logedIn=true;
        res.redirect('/accueil');
      }
      else{
        res.redirect('/');
      }

    });




app.listen(8080);
console.log('8080 is the magic port');
