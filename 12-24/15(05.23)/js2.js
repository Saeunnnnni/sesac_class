
let hello ='안녕하세요'; //전역변수//

if(true){
    let hello='hello'; //지역변수//
    console.log(hello);}
    //이건 재선언이 아니고 각각 다른 변수야 블록안에서만 나오는 변수 그래서 콘솔을 블록 안에 찍으면 나옴 


console.log(hello);
//let hello='반갑습니다.'재선언 안됨
hello='반갑습니다.' //재할당은 됨 

console.log(hello);
