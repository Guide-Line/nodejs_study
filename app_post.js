//post > 입력 from
var express =require('express');
var bodyParser = require('body-parser');


var app = express();

app.locals.pretty = true; // 소스보기시 ungliy 했던 파일이 pretty 해짐
app.set('view engine' , 'jade'); // view engine(약속되어있는 언어) 템플릿 엔진을 사용하겠다  jade 를사용하겠다
app.set('views', './views');// 템플릿이 있는 폴더를 정해준다. views 폴더네임


app.use(bodyParser.urlencoded({
	extented : false
}))

app.get('/form' , function(req, res){
	
	res.render('form');
});


/*
	form jade 에서 post get 값을 바꿔 저장할수있다.
	
	express 에서 기본적으로 get 방식을 지원한다 
	
	하지만 
	
	post 방식은 지원하지않는다 
	
	하여 
	
	body-parser 를 추가적으로 설치하고 
	
	app.use(bodyParser.urlencoded({
		extented : false
	}))
	
	코드 작성후 req.body 로 접근하여 값을 알아낼수있다.
*/

app.get('/form_receiver' , function (req, res){
	var title = req.query.title;
	var description = req.query.description;
	res.send(title + ' , ' + description)
})

app.post('/form_receiver' , function (req, res){
	var title = req.body.title;
	var description = req.body.description;
	res.send(title + ' , ' + description)
})


app.listen(3000 , function(){
	console.log("connect 3000!")
})