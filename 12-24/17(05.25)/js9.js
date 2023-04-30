//날짜, 시간에 관련된 Date 객체


const now = new Date();

console.log(now.getFullYear()) //년
console.log(now.getDate()) //월 0부터 나오기때문에 (인덱스번호로 나오는거라서 ) +1해줘야함
console.log(now.getMonth()) //날짜 
console.log(now.getTime()); //시간 -> 밀리세컨드단위로 출력됨 
console.log(now.getHours()) //시간
console.log(now.getMinutes()) //분
console.log(now.getSeconds()) //초

let h = now.getHours(); 
let m = now.getMinutes();
let s = now.getSeconds();

let timebox = `${h}: ${m}:${s}`
console.log(timebox)   //현재시간 한번에 나오게 하는것 ! 변수로 만들어줘서!




