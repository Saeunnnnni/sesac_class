//전역객체(global object): 자바스크립트에 내장 되어있는 객체, 범위가 전체

console.log(globalThis)

//wrapper객체 : 원시타입의 값을 감싸는 객체 

const num = 2022; //원시  : 원시타입이긴 하지만 숫자로 쌓여져 있는 객체
const str = '05월 25일' // 원시 : 얘는 스트링?으로 쌓여져 있는 객체
console.log(num) //원시 - 노란색으로 나옴 값을 바로 출력했을때는 
console.log(num.toString()); //객체 - 하얀색으로 나옴 매서드를 주면 글자로 나옴 스트링으로 ?

//저 위에 설명이 맞는 지 모르겟당.ㅎㅎ

