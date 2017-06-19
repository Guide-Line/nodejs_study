//복습영역

var express = require('express');
var app = express();
app.locals.pretty=true;
app.set('view engine' , 'jade'); // view engine(약속되어있는 언어) 템플릿 엔진을 사용하겠다  jade 를사용하겠다
app.set('views', './views');// 템플릿이 있는 폴더를 정해준다. views 폴더네임

app.get('/jdk' , function(req ,res){
	
	res.render('temp' , {title:'JDK' , time:new Date()});
});


//get : 라우팅한다 , 라우트  요청이 들어왔을때 길을 찾아주는 역활을한다.
app.listen(3000,function(){
	
	console.log('Connected 3000 port!');
});


/*
express 사용
jade 템플릿 사용하겠다는  세팅
get 방식에서 jade 페이지 rander 링 시켜준다 이때 변수는 객체로 넣어준다.
*/