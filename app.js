//메인 에플리케이션

var express = require('express');
var app = express();
app.locals.pretty = true; // 소스보기시 ungliy 했던 파일이 pretty 해짐
//템플릿 엔진을 사용하겠다.
app.set('view engine' , 'jade'); // view engine(약속되어있는 언어) 템플릿 엔진을 사용하겠다  jade 를사용하겠다
app.set('views', './views');// 템플릿이 있는 폴더를 정해준다. views 폴더네임
//app.set('views', './views'); 구문이 삭제되어도 express 는 템플릿 jade 파일이 ./views 라는 폴더에 지정되도록 기본값으로 설정되어있다.


app.use(express.static('public')); // public 이라는 디렉토리에 정적인 파일을 위치시키면 그 정적인 파일을 사용자에게 서비스 할수있다.


app.get('/templete' , function (req, res){
	
	res.render('temp' , {time:Date() , title:'Jade'}); // temp.jade 에 time 변수에 값을 주입해준다.
	//템플릿 파일 렌더링 
	// temp에 해당되는 파일을 렌더링한다.
	// 두번째 인자에는 객체를 정의하여 넘겨줄수있다 약속됨
});

//  get 방식  : 주소를 쳐서 홈페이지에 들어오는 방식
//http://localhost:3000
app.get('/' , function(req , res){
	// req , res(응답에 대한 객체) 명시적으로 약속된 값
	// 사용자가 홈에 접속하면 
	
	res.send('Hello home page!'); // res에는 send 라는 함수가 정의되어있다.
}); 

app.get('/dynamic' , function(req , res){
    
    var lis ='';  
    var time = Date();
    for(var i=0; i<5; i++){
        lis = lis + '<li>coding</li>'
    };
    var output = `
        <!doctype html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Untitled Document</title>
        </head>
        <body>
            hello dynmic!
            <ul>
            ${lis}
            </ul>
        </body>

        ${time}

        </html>`
    res.send(output)
})

//http://localhost:3000/route
app.get("/route" , function(req, res){
	res.send('Hello Router, <img src="/sample.png">')
})

//http://localhost:3000/login
app.get('/login' , function(req , res){
	
	res.send('Login plz..')
});

//get : 라우팅한다 , 라우트  요청이 들어왔을때 길을 찾아주는 역활을한다.
app.listen(3000,function(){
	
	console.log('Connected 3000 port!');
});