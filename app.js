//메인 에플리케이션

var express = require('express');
var app = express();

//  get 방식  : 주소를 쳐서 홈페이지에 들어오는 방식
//http://localhost:3000
app.get('/' , function(req , res){
	// req , res(응답에 대한 객체) 명시적으로 약속된 값
	// 사용자가 홈에 접속하면 
	
	res.send('Hello home page!'); // res에는 send 라는 함수가 정의되어있다.
}); 


//http://localhost:3000/login
app.get('/login' , function(req , res){
	
	res.send('Login plz..')
});


//get : 라우팅한다 , 라우트  요청이 들어왔을때 길을 찾아주는 역활을한다.


app.listen(3000,function(){
	
	console.log('Connected 3000 port!');
});