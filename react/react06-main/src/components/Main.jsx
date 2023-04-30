import React from 'react';
import './../style/main.css';
import { useState, useEffect,useRef} from 'react';


const Main = () => {

    const listData = ['content01', 'content02', 'content03', 'content04'];
    const [num, setNum] = useState(0);  
    const [check, setCheck] = useState('next');
    const checkRef = useRef('next');
 /*    console.log(checkRef) {current:'next'} 객체 타입으로 값을 저장하고 사용할 수 있다 컴포넌트 함수를  재랜더링 하는 기능은 없다. */
    listData.unshift(listData[listData.length-1]) 
    const fncClassAdd = (i) => {
        const on =(i===num)?' on':' on'; //i===num on i랑 num값이 일치할때만 on이 되고 아닐떄는 그 값이 빠지게하는 삼항연산자
        //인덱스랑 넘이 일치해야 함         
        const view = 'view_';
        const textNum = "00000" + (i + 1);
        const viewText = view + textNum.slice(-2);
        console.log(viewText)
        return viewText+on
    } 
    const initialStyle = {
        position: `relative`,
        left:`-100%`,
        marginLeft: `${num * -100}%`,
       // transition: (num!==0) ? 'margin 500ms ease' : 'none', /* 0번째는 트렌지션이 적용이 안되고 1,2,3까지는 적용이 된다  */
        //animation: (num===0) ? 'firstSlide 500ms ease 1' :'none'
       /*  num이 0과 같다면 트렌지션 , 아니면 안줌  */


    } //css object으로 만들어서 사용 이유가 있는데 뭔소린지 이해 못함 ㅋㅋ
    const [slideStyle,setSlideStyle]=useState(initialStyle)
    const fncPrevStyle = () => {
        setSlideStyle({
            ...initialStyle, //initialstyle값이 들어옴

            transition: (num !==3) ? 'margin 500ms ease' : 'none', //3이면

            animation: (num===3) ? 'lastSlide 500ms ease 1' :'none'//3이아니면

        })
    }
    const fncNextStyle = () => {
        setSlideStyle({
            ...initialStyle,
            transition: (num !== 0) ? 'margin 500ms ease' : 'none',
            animation: (num===0) ? 'firstSlide 500ms ease 1' :'none'
        })

    }

    const fncPrevSlide = () => {
        setNum(num<=0?3:num-1);
        checkRef.current = 'prev';
    }

    
    const fncNextSlide = () => {
        setNum(num >= 0 ? 3 : num+1);
       /*  setCheck('next'); */
        checkRef.current = 'next';
    }
/*     next 버튼을 클릭하면 fncNectSlide 호출					
	setNum => +1이 되고  check = next가 됨 					
	useEffect를 사용해서 num의 변화가 있을때 (변화할때마다)					
	check상태가 어떤 상태인지 감지하고 					
	next가 들어가 있으면 fncNextStyle함수를 호출해서 					
	ul에다가 스타일을 입힌다.					
 */
    
    useEffect(() => {
        (checkRef.current === 'next') ? fncNextStyle() : fncPrevStyle();
    },[num])
    return (       
        <div className='mainContainer'>
            <h2>메인페이지</h2>
            <div className='viewBox'>
                <div className='slideBtn'>
                <button type='button' onClick={fncPrevSlide}>이전</button>
                 <button type='button'onClick={fncNextSlide}>이후</button>

                </div>
            </div>
            <div className='viewContents'>
                <ul style={slideStyle}>
                    {
                        listData.map((list,index)=> {
                            return (
                                <li className={fncClassAdd(index)}>{list }</li>
                            )
                        })
                    }
     

            </ul>
            </div>
        </div>
    );
};

export default Main;

/* const list =[1,2,3,4,5,a,b]
const list2= list
const list2=[...list]
const obj = {a:1, b:2, c:3}
//const obj2=obj  참조만 맞춘것
cosnt obj2={...obj,c:4, b:1,e:8}
console.log(obj,obj2)
*/

/* useState	값이 바뀌면 해당하는 변수에 따라서 값이 재할당 (업데이트) 컴포넌트를 다시 랜더링 한다.			
useref 	값이 바뀌더라도 값이 재랜더링 되지 않는다. 			
	한번 랜더링 되면 그 값을 가지고 있는다 	 
    
    
    const box={a:0}
    
    useState를 사용하면 
    useState[box, setBox] = useState(0)
    setBox(10)
    매개변수를 다시 넣어서 재실행 시킨다 
    값이 setNum에 들어가면 Main컴퍼넌트를 다시 랜더링 시킨다 -> 콜백함수 
    결국 메인 함수를 다시 호출 하는 usestate=콜백함수 
    함수 재실행


    
    
    */		
