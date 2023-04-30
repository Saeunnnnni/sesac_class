// 논리합or || 논리곱 and && 연산자를 이용한 단축평가
// 좌항 우항 평가가 된다. 2개의 피연산자 중 어느 하나의 값으로 평가 된다.
// 평가된 값은 형변환 하지 않고 현재 값을 반환한다.

//논리합  ||

console.log(true || true )  //true
console.log(60||50) // 60  좌항도 참 , 우항도 참이면 왼쪽값을 반환/ 단축 평가라서 이미 평가가 끝나면 반환하기 때문에 좌항의 값이 우항의 값보다 크든 작든 상관없이 좌항의 값이 참이면 반환 
console.log(true||false) //true
console.log(10||0)//10
console.log(false||true) //true
console.log(''||100)  //100
console.log(false||false)//false
console.log(undefined||0) //0


//논리곱 &&
console.log(true&&true) //true
console.log(300&&500) // 500 앤드앤드이기때문에 좌항, 우항 둘다 참이어야 반환이 되기 때문에 500까지 참인지 확인을 하고 우항값을 반환
console.log(false&&true) //false 
console.log(0&&500)//0 : 이미 0에서 평가가 끝났기 때문에 단축평가로 0을 반환함 
console.log(true&&false) //false
console.log(1&&null) //false
console.log(false&&false) //false
console.log(0 && undefined) //0  


//부정연산 
console.log(!10) // (!true) => false
console.log(!!10) // (!!true) => true !!반대의 부정이니까 true
console.log(!'hello') // false
console.log(!!'hello') // true