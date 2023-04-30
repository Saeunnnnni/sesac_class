class User{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hi() {
        console.log('이름은' + this.name + '나이는' + this.age)
    }
    }
    
const user1 = new User('홍길동', 10);
const user2 = new User('김철수', 20);
console.log(user1)
console.log(user2)
user2.hi() //클래스 안에 들어가 있고 컨스트럭에는 없지만 클래스에서 공유가 된다

//extends (class를 가지고 다른 클래스의 자식으로 만든다. class를 확장시키다.)

class AddUserLocation extends User { //user를 가지고 adduserlocation을 확장시킨다
    constructor(name, age, location) {
        super(name,age);//user를 뜻함 user의 컨스트를 받아와야하기 때문에 : 꼭 적어줘야함 (위의 class값을 상속받아야하기때문에) 매개변수도 적어줘야함 
        this.location = location;
    }
    hi() {
        console.log('유저의 위치는' + this.location)
    }//같은 hi에 다른 내용을 썼기 때문에 덮어쓰기가 됨 = 오버라이딩


}
const user3 = new AddUserLocation('jack', 20, 'ny');
console.log(user3);
user3.hi();


class AddUser extends User {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    hi() {
        super.hi();
        console.log(`안녕하세요 현재 유저의 위치는 ${this.location}`)
    }
}
const user4 = new AddUser('merry', 25, 'LA')
console.log(user4);
user4.hi();


//Dog클래스 color weight gender
//Dog클래스를 확장시켜서 Cat  color weight gender + name


class Dog {
    constructor() {
        this.color = color;
        this.weight = weight;
        this.gender = gender;
    }
   //매서드는 꼭 잇어야하는건 아님 
}

const user5 = new Dog('red', '3kg', 'M')
console.log(user5);

class Cat extends Dog{
    constructor(color, weight, gender, name) {
        super(color, weight, gender);
        this.name = name;
    }
   }

const user6 = new Cat('red', '3kg', 'M', 'berry')
console.log(user);