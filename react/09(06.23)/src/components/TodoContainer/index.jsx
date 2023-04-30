import React from 'react';
import './index.css'

const TodoContainer = ({ todo, setTodo }) => {
    if (todo===undefined) {
        return(
            <div className='EmptyContainer'>
                <h1>할일이 없습니다.</h1>
                <p>새로운 할일을 추가해보세요.</p>
          </div>
       )
    }
    return (
        <div className='TodoContainer'>
            <div>
                <input type='text'
                    className='TodoContainer__title'
                    value={todo.title}
                    onChange={(e) => {
                        setTodo({
                            ...todo,
                            title:e.target.value,
                        })
                    }}//onchange했을때 기존의 값을 새로운 값으로 바꿈 (수정)
                    //...todo : 원래 값을 카피를 하고  e.target.value : 수정
                
                />
                
            </div>
            <div>
                <textarea
                    className='TodoContainer__body'
                    value={todo.content}
                    onChange={(e) => {
                        setTodo({
                            ...todo,
                            content:e.target.value,
                        })
                    }}>
            
                    </textarea>
                
            </div>
            
        </div>
    );
};

export default TodoContainer;