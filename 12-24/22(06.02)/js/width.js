

const winScreen = window.screen.height ;//모니터해상도사이즈 (넓이, 높이)
const winOuter = window.outerheight;//전체 브라우저의 넓이(높이)
const winInner = window.innerheight; //document 부분의 넓이(높이) (상태표시줄이랑 그런거 다 빼고 딱 보여지는 부분의 넓이=body부분)



const outer = document.querySelector('#outer')       
const box1 =  outer.clientheight; //padding까지 포함한 넓이 
const box2 =  outer.offsethwidth; //boder까지 포함한 넓이
const box3 =  outer.scrollHeight; //가시적인 부분의 넓이가 아닌 컨텐츠 영역의 크기를 가지고 온다 
const box4 =  outer.getBoundingClientRect().width;//이 매서드 많이 사용함 / offsetWidth 같다 (단, transform 을 하게 되면 랜더링한 값을 받아서 offset이랑은 다르게 나옴 ) 그냥 괄호만 쓰면 모든 값을 뽑아 내고 .원하는것 쓰면 그 값만 나옴 



/*  console.log(winScreen)
console.log(winOuter)
console.log(winInner) */
console.log(box1)
console.log(box2)
console.log(box3)
console.log(box4)



