

function hello() { 
    console.log('hello world');
}
hello();
hello();
hello();

//선언문 방식

//function num(a,b){
  // return a + b ;

//} //값은 30인데 return해서 결과를 놓을 공간이 없기때문에 const result 라는 변수를 사용해서 결과값을 호출 (맞나..?ㅋ) 
//const result = num(10,20)

///console.log(result)

//매개변수

function userInfo(name, age){
    return `이름은${name} 나이는${age}`
}

const profile = userInfo('홍길동', 20);
console.log(profile)

//두개의 매개변수를 받아서 두 값을 곱해서 출력하는 함수 

function num(a,b){    //function muti num(num1,num2)
    return a*b ;           //return num1*num2

}
const result=num(20,40)            //const resultMuti=num(20,40)

console.log(result)                //console.log(resultMuti)

function muti(num1,num2){    //function muti num(num1,num2)
    return num1*num2 ;           //return num1*num2 ->쌤답 위에 있어서 멀티를 쓴듯 나는 위에꺼를 주석처리하고 다시 만듬 

}
const resultMuti1 = muti(5,30)
const resultMuti2 = muti; //이렇게하면 함수가 되어버려서 값에 function이 들어감 
console.log(resultMuti1) //150
console.log(resultMuti2(50,60)) //function