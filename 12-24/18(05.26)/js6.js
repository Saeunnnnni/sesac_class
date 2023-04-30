//Date 객체 이용해서
//년월일요일 - > 2022년 5월 26일 목요일

const today = new Date();
const year = today.getFullYear();
const month = today.getFullMonth + 1();
const day = today.getDate(); 4
const weekDay = ['일', '월', '화', '수', '목', '금', '토']
const date = weekDay[today.getDay()];

console.log(`${year}년 ${month}월 ${day}일 ${}`)
getFullYear(2022) getMonth() getDate() getDay()