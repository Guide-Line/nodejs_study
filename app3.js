//시멘틱 url 

var express = require('express');
var app = express();
app.locals.pretty = true;


//topic 라우팅  query - > params 로 변경

app.get('/topic/:id/:mode', function(req, res){
  var topics = [
    'Javascript is....',
    'Nodejs is...',
    'Express is...'
  ];
  var output = `
  <a href="/topic?id=0">JavaScript</a><br>
  <a href="/topic?id=1">Nodejs</a><br>
  <a href="/topic?id=2">Express</a><br><br>
  ${topics[req.params.id]}
  `
  res.send(output);
})

//get : 라우팅한다 , 라우트  요청이 들어왔을때 길을 찾아주는 역활을한다.
app.listen(3000,function(){
	
	console.log('Connected 3000 port!');
});