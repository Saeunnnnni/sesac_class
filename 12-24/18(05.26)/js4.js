const color = ['red', 'green', 'blue', 'yellow']
color. shift() //맨앞제거
console.log(color)
color.pop()//맨뒤제거
console.log(color)
const famName = ['철수', '영희', '순희', '길동']
famName.splice(2, 1) //특정부분제거
console.log(famName)
const newFamName = famName.slice(-1); // = famName.slice(2,3)
console.log(famName)
console.log(newFamName)


const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6, 7, 8, 9]//concat() 배열끼리 합치기
const arrPlus = arr1.concat(arr2)
console.log(arrPlus)

const arrReverse = arrPlus.reverse();
console.log(arrReverse)

let mutiArray = [['a', 'b', 'c'],['가', '나', '다'],['산','바다']]

console.log(mutiArray); //flat() 중첩된 배열을 합친다.

const mutiflat = mutiArray.flat(2); //flat(중첩depth) 2depth 이상일때 써줘야함 

console.log(mutiflat); 

//const txtJoin = mutiflat.join(); //문자열로 합치기 
const txtJoin = mutiflat.join('-'); //이게 연결자로 들어감 
console.log(txtJoin) 


