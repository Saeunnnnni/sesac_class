const parent={
    name : 'kim',
    age : 50

}
//1. 생성자 함수로 만든다. construtor로 만든다.
//2. Object.create() ES5 때 만들어짐  : 쉽게 상속 받을 수 있음 


const child = Object.create(parent);
console.log(child) //{} Object.create는 프로토타입을 가져다가 쓸 수 있게 해주는 거라서 부모요소의 프로토타입을 가지고 온거라서 나는 비어있기 때문에 값은 찍히고 {} 값이 나오는 것 
console.log(child.name)//kim
console.log(child.age)//50

const item={title:'TEE',price:5000}
const itemChild= Object.create(item);
itemChild.price=7000;
console.log(itemChild.price);
console.log(itemChild)
//우선순위가 '나'라서 부모에게 상속 받더라도 나의 값이 출력 

const itemChildChild = Object.create(itemChild);
console.log(itemChildChild.price)
//ES6 Class

