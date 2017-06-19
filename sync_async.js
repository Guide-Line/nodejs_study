var fs = require('fs');
console.log(1);
var data = fs.readFileSync('data.txt' , { encoding : 'utf8' }); 
console.log(data);  // 3번줄 코드 가 전부 로드가 되어야 실행됨을 알수있다.


console.log(2);


fs.readFile('data.txt' ,{encoding :'utf8'} , function(err , data){
    console.log(data);
});