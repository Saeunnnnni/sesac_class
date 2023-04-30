const a = 100;

const b = 200;

const hi = '안녕하세요';

//export default hi;  //export 할 값을 정함 _ 여기서 내보낼 값을 정한다는 거지 !

export { a, b, hi } //여러개를 한번에 내보낼수 있음 !


// export default  한 개의 값만 내보내기 할 수 있다. 모듈에서 import시 새로운 이름으로 받을 수 있다.
// export {} 여러개를 담아서 내보내기 할 수 있다. 모듈에서 import시 이름을 일치시켜줘야 한다.