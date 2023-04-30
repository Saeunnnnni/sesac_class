console.log(Math.PI) // Math하면 수학 객체 : PI =원주율 계산

console.log(Math.ceil(10.53)) //올림
console.log(Math.floor(10.53)) //내림
console.log(Math.round(10.53)) //반올림

console.log(Math.min(1, 5, 10)) // 가지고 있응 값중의 최소값
console.log(Math.max(1, 5, 10)) //가지고 있는 값중의 최대값

console.log(Math.random())  //랜덤으로 아무숫자가 나옴 0~1사이에서의 값
console.log(Math.random() * 10) //0~10까지 나옴 
console.log(Math.random() * 10 + 1)  //0이 안나옴 1~11
console.log(Math.round(Math.random()*10)) 


//다섯자리 숫자를 랜덤으로 만드는거래 ~ 라라라랄

/* random 이용해서 5자리 인증번호출력  */



let pass ='';
for(let i=1 ; i<6; i++){
    pass+=(Math.floor(Math.random()*10))
}//floor로 싸서 숫자가 넘어가지 않게 
console.log(pass)
