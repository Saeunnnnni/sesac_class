const num = 123;
const num1 = new Number(123); 

console.log(typeof num)
console.log(typeof num1)

console.log(Number.MAX_VALUE) //최대값
console.log(Number.MIN_VALUE) //최소값
console.log(Number.NaN); 

if (Number.isNaN(num1)) {
    console.log('실행')
}

const num2= 1234.4568789;
console.log(num2.toFixed(2)) // 소수점 2째짜리수까지 toFIXED 소수점자리 절삭 
console.log(num2.toString())
console.log(num2.toPrecision(5))//원하는 자릿수까지 표현을 해주고 뒷부분은 지수표시 