const obj = {
    'a': 1,
    'b-a': 2,
    '1c': 3,
    'd1':4,
}

console.log(obj['a']); //속성의 이름으로 읽음
console.log(obj.a); //b에서 a를 빼라고 인식해서 안나옴 그래서 대괄호 표기법으로 a['b-a'] 하면 인식 가능  대괄호 표기법: 변수의 이름으로 읽음 
/* console.log(obj.1c); */ //숫자로 시작하면 에러가 남
console.log(obj.d1);

const obj2 = {
    a: 1,
    b:2
}
const a = 'b'

console.log(obj2[a]) //2로 읽음  -> [a] = b가 되어버려서 
console.log(obj2.a) //1로 읽음
