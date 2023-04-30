function People(name,age){
    this.name=name;
    this.age=age;
    this.adress='seoul'

}
//생성자 함수로 똑같은 object를 찍어냄 !~
const people1 = new People('순이','30')  
const people2 = new People('철수','10')

console.log(people1)

function Circle(radius){
    this.radius = radius;
    this.getDiameter=function(){
        return this.radius*2
    }

}
const Circle1 =new Circle(5)
const Circle2 = new Circle(10)

console.log(Circle2.getDiameter())
console.log(Circle1)

// 이름 , 국, 영, 수, 평균
// KIM, LEE, PARK 

function Score(name,ko,en,math){
    this.name=name;
    this.koNum=ko;
    this.enNum=en;
    this.mathNum=math;
}
   Score.prototype.getAvg = function(){
    return (this.koNum+this.enNum+this.mathNum)/3
}
const kim = new Score('KIM',70,80,90)  
const lee = new Score('LEE',60,90,90) 
const park = new Score('PARK',50,90,70) 

console.log(park)
console.log(park.getAvg())
console.log(Score.prototype)

function Average(){
    this.radius = radius;
    this.getDiameter=function(){
        return this.average
    }

} 