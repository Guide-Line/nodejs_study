var express = require('express');
var app = express();
app.locals.pretty=true;
app.set('views' , './views_file');
app.set('view engine' , 'jade');

app.get('/topic/new' , function(req,res){
    res.render('new');    
})

app.listen(9999,function(){
    console.log('Connect, 9999 port')
});