var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
app.locals.pretty = true;
app.use(express.static('public_file'));
app.use(bodyParser.urlencoded({extended : false}));
app.set('view engine' , 'jade');
app.set('views','views_file');
app.get('/topic/new',function(req,res){
    res.render('new');
});
app.post('/topic',function(req,res){
    var title = req.body.title;
    var description = req.body.description;
    fs.writeFile('/data/'+title , description, 'utf8', function(err){
        res.redirect('/topic');
    })
});

app.get('topic',function(req,res){
    fs.readdir('data',function(err,files){
        res.render('index',{topics:files});
    });
})