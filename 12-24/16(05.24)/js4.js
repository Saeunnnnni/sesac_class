

//가격 * 0.4 로 text 출력 

function Product(item, price){
    this.item=item;
    this.price=price;
    this.text=function(){
        return(this.price*0.1)
    }

}
Product.prototype.tex=function(){
    return(this.price*0.1)
}

const product1= new Product ('book',15000)
const product2= new Product ('game',25000)
const product3= new Product ('cd',2000)

console.log(product1.tex())

//인스턴스 오브젝트가 값을 직접 소유하게 만들게 하고싶으면 constructor에 만든다
//prototype 만 가지고 있고 참조해서 사용하고 싶으면 prototype에 만들어서 상속시킨다.
//인스턴스는 prototype를 가지고 있지 않다. constructor함수만 prototype을 갖는다.

console.log(product3.__proto__);
//__proto__: 부모가 어떤 속성값을 가지고 있는지 확인할때 쓰는 속성 
