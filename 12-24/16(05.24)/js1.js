const cat={
    name : 'momo',
    gender :'male',
    age:5,
    family:'러시안블루',
    sayHello : function(){
        console.log('안녕하세요'+this.name+'입니다.')
    }

}//object  


console.log(cat.name) //점 단뒤 표기법
console.log(cat['family']) //대괄호 안에 키값을 문자를 넣어서 읽음 
cat.sayHello();//매서드를 불러올때 : sayHello 안에 들어가는 값을 가지고 올거니까 () 넣어줘야함 


//20, 김철수,  seoul 

const men={
    name : '김철수',
    age : '20',
    address : 'seoul',
}
console.log(men)
console.log(men.name)
men.gender='male' //속성추가할때 *2번째 방법: people[gender] = 'male';

console.log(men)
