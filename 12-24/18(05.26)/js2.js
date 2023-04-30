const subway = ['1호선', '2호선', '3호선', '4호선','5호선']

console.log(subway[2])
console.log(subway.length)

//인덱스를 삭제하고 싶을때 
/* delete subway[2]; //배열의 인덱스는 수정 하지 않는다. */
subway.splice(2,1) //(시작인덱스,몇개를 할건지) 배열의 인덱스가 업데이트 된다.
console.log(subway)

//for문으로 전체 다 나오게 하기 
for (let i = 0; i < subway.length; i++){
    console.log(subway[i])
}//i의 최대값을 숫자로 정하는거보다 length로 정하면 나중에 배열을 추가해도 전체가 나올수 있음

