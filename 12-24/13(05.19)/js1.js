let a=1;
let b=2;
let c={
    name: 'lee',
    age:30,
    address:'busan',
    tel:'0101234565',
}



let d= a;
console.log(d)
let e = c;


a=10;
console.log(a)
console.log(d)


let f = c;
console.log(f)

c.age=50;

console.log(c)
console.log(f)