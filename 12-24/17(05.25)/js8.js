const text = 'Hello World!';
console.log(text.length);
console.log(text.charAt(0));
console.log(text.charAt(6));
console.log(text.indexOf('W'));
console.log(text.lastIndexOf('l'));
console.log(text.includes('h'));
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.substring(0, 2)); //0~2번째자리 전까지 
console.log(text.slice(2)); //2번쨰 다음 자리 부터
console.log(text.slice(-2)); //뒤에 두자리 
console.log(text.substring(-2, 6)); 
console.log(text.slice(-2, 6));

 
const spacetxt = '             aaa            bbb    ';
console.log(spacetxt.trim()); //앞에있는 공백만 제거하고 뒤에있는 공백은 제거 안됨 
const spacetxt2 = 'aaaa-bbbb-cccc-dddd'; //구분자는 공백이 아니고 , 도 가능 
console.log(spacetxt2.split('-'));
console.log(spacetxt2.split('-', 2))

const textSample = '가나다라마바사 ABCDEFG 123456 가나다라마바사';
console.log(textSample.slice(-2))
console.log(textSample.substring(-2))

//slice(n) n번째 인덱스부터 끝까지 추출
//slice(n,m) n번째부터 m-1까지 추출
//slice는 음수일경우 뒤부터 계산 
//substring 음수가 오면 0