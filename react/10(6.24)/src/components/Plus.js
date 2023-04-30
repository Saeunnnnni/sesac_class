import React from 'react';
import { useState,useCallback } from 'react';

const Counter = () => {
  const [value, setvalue] = useState(0)
  
  const plus =useCallback(//usecallback으로 감싸주고 
    () => {
      setvalue(value + 1); //callback함수가 들어가는 자리 
    }, [value])
  
  
  const resetPlus = useCallback(() => {
    setvalue(0);
  },[]) //초기값을 계쏙 사용함 디펜던시가 없기 때문에 
  


    return (
        <div>
        <h1> 값 :{value} </h1>
        <button onClick={plus}>
          plus + 
        </button>
        <button onClick={resetPlus}>
          reset
        </button>
      </div>
    );
};

export default Counter;