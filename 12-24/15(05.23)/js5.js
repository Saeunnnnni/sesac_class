/* 
function numAdd(a,b,c){
    console.log(arguments)
    console.log(arguments.length)
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    return a+b+c;
}

console.log(numAdd(10,20,30))
console.log(numAdd(10,20)) //값이 두개밖에 없으면 오류가 된다. */

/* 
function numAdd(a=0,b=0,c=0){//인수에 초기값을 설정할수 있음
    console.log(arguments) //전달된 인수값만의 객체 
    return a+b+c //10+0+0
}

console.log(numAdd(10));
 */

function numAdd(...num){  //rest 파라미터 ES6
    console.log(num[0])
    console.log(num[1])
    console.log(num[2]) 
    return ; //10+0+0
}

console.log(numAdd(10,20,30,40,50,60));

//for 문을 이용해서 전달받은 매개변수의 총 합을 구하세요

function numSum(...num){
   /*  console.log(num.length)
    console.log(num[0])
    console.log(num[1])
    console.log(num[2]) */
    let sum=0; //초기값설정
    for(let i=0 ;i<num.length;i++){ //length는 0~4이고 숫자의 개숫는 5이기때문에 length보다 작다고 설정 
       sum+=num[i]; //sum= 30 <-대입연산 , 갯수만큼 플러스가 되어서 들어감 
    }
    return sum;
}
console.log(numSum(10,20,30,40,50))