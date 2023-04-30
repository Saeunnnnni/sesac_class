var a=0;
var a=10;


console.log(a);


var num = 1; /*전역변수*/
if(true){ /*전역변수 함수가 아니라서 */
    var num=100;
} //둘다 전역변수여서 재선언이 되었기때문에 100이 나옴 //
console.log(num);