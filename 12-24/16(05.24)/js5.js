// __proto__: 1. 부모 생성자의 프로토타입을 확인하는 속성
//            2. object 끼리 상속 할 수 있게 구현해준다.

const parent={name:'kim'}
const child={}

child.__proto__=parent;

console.log(child.name)