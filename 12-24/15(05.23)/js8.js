//콜백함수 : 매개변수로 전달되는 함수
//고차함수 : 매개변수로 다른 함수를 전달받거나 함수를 리턴 하는 함수

const plus=(num) => {
    return num +2 ;

}
const minus= (num)=> {
    return num - 2;
}

const multiply= (num)=>{
    return num *2;
}
const division= (num)=>{
    return num / 2;
}
const cal = (func , numValue) => {
    return func(numValue)
}

cal(plus , 10)

console.log(cal(plus,10)) //12 
console.log(cal(minus,10))//8
console.log(cal(multiply, 10))//20
console.log(cal(division, 10))//5
