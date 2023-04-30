
const arr = ['사과', '바나나', '귤', '배']

// for in문은 객체와 배열에 둘다 사용 가능 객체와 배열을 순환하면서 인자를 하나하나 뽑아온다

for (let i in arr) {//in 뒤에 순환할 대상을 써 주면 됨 arr의 갯수 만큼 순환하기 때문에 초기화를 적을 필요 없음
    //i의 초기값은 0으로 자바스크립트 엔젠에서 초기화 된 상태 
    //i는 계쏙 증감한다 arr가 끝날때까지 
    
    console.log(i)
    console.log(arr[i])
} 
const obj = {
    name: '사과',
    price: '1500',
    weight:'20g'
}

for (let key in obj) {
    const value = obj[key]; // 키는 변수이기 때문에 변수로 접근
    console.log(key);
    console.log(value);
} //obj안에서도 제대로 순환함 