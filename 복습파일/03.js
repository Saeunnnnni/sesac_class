

let sum =0
for (let i = 1; i < 100; i++){
   sum+=i
}//1부터 100까지 더하는 for문
console.log(i)

for (let i = 1; 1 < 100; i +=2){
    console.log(i)
} //1 to 100중에 홀수만 

for(let i=1;i<=50;i++){
    let stringValue = i.toString()
    let result = ""
    for(let j=0;j<stringValue.length;j++){
      if(stringValue[j] == "3" ||stringValue[j] == "6" ||stringValue[j] == "9" ){//j라는 값을 가져오기 위해서 j의 인덱스 값을 가져옴 
       /* result=result+"짝" */ result+="짝" 
      }
    }
    console.log(result.length>0?result:i) //결과값이 비어있으면 i값을 출력해주세요
  } //369
    
let n = 11
let isPrime = true

if (n === 1) {//1은 소수가 아님 
    isPrime=false
}
for (let i = 2; i < n; i++){
    if (n % i == 0) {
        isPrime=false
    }
}//주어진 숫자가 소수이면 true 아니면 false

console.log(isPrime)

