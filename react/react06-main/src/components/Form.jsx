import React from 'react';
import { useRef,useState } from 'react';


function Form(props) {
    const writer = useRef(); //useRef로 변수를 만듬 , 객체형태의 변수 생성 writer=> 작성자 input 참조 
    const content = useRef(); //content = >컨텐츠 input 참고 
    const [state, setState] = useState({
        writer: '',
        content: '',
        grade:50

    });

    const fncForm = (e) => { 
        setState({
            ...state,
            [e.target.name] : e.target.value //name 에는 writer가 들어오고, value에는 작성한 값이 들어옴 
        })
    }
    console.log(state)  
    const fncSubmit = () => {
        console.log(state)
    }
     
  
    console.log(writer)  
    return (
        <div style={{width:'1200px',margin:'auto',fontsize:'2rem' }}>
            <div>
                <input type='text' name='writer' id='writer'  placeholder='작성자'  value='홍길동' ref={writer}   onChange={fncForm}/>
                <label htmlFor='writer' className='blind'>작성자</label>
               

            </div>
            <div>
                <textarea name='content' placeholder='오늘수행한 일'
                    ref={content}  onChange={fncForm} />

            </div>
            <div>
            <select name='grade' value={state.grade} onChange={fncForm}>
                <option value=''>50</option>
                <option value=''>60</option>
                <option value=''>70</option>
                <option value=''>80</option>
                <option value=''>90</option>
                <option value=''>100</option>
            </select>

            </div>
            <div>
                <button onClick={fncSubmit}>저장하기</button>
            </div>
        
        </div>
    );
};

export default Form