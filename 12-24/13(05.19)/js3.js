let a=10;
let b='10';

let c= a==b ; 
console.log(c)

let num1=100;
let num2='100'

let num3=num1!==num2;
console.log(num3);

let v1=10, v2=20, v3=30, v4=40, result;
result=!(v1>v2) ; //!를 써서 반대로 부정
result=v1>v2 || v2<=v3 || v3<=v4; 
console.log(result)

//삼항연산자, 조건부연산자
result= v1>v2 ? 'A' :  'B';
console.log(result)